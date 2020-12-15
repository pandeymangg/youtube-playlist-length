const express = require('express')
const { google } = require('googleapis')

const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })

const api_key = process.env.API_KEY
let nextPageToken = null
const app = express()

const youtube = google.youtube('v3')

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Welcome')
})

const calculateDuration = async (req, res) => {
    try {
        //console.log(req.body.id)
        let videoIds = []
        let regex = /(\d+)/g
        let duration = []
        let durationString = ''
        let nextPageToken = null
        let durationSeconds = 0
        let totalSeconds = 0
        let speed = parseFloat(req.body.speed) || '1'
        let thumbs = []
        let length = 0
        let title = ''
        let channelTitle = ''
        let description = ''

        const testResponse = await youtube.playlists.list({
            key: api_key,
            part: 'snippet',
            id: req.body.id
        })

        title = testResponse.data.items[0].snippet.title
        channelTitle = testResponse.data.items[0].snippet.channelTitle
        description = testResponse.data.items[0].snippet.description

        thumbs.push(testResponse.data.items[0].snippet.thumbnails)

        while (true) {
            const plResponse = await youtube.playlistItems.list({
                key: api_key,
                part: 'contentDetails, snippet',
                playlistId: req.body.id,
                maxResults: 50,
                pageToken: nextPageToken
            })

            videoIds = []
            plResponse.data.items.forEach(item => {
                videoIds.push(item.contentDetails.videoId)
            })

            length += videoIds.length

            const vidResponse = await youtube.videos.list({
                key: api_key,
                part: 'contentDetails',
                id: videoIds.join(',')
            })

            vidResponse.data.items.forEach(item => {
                duration = item.contentDetails.duration.match(regex)

                if (duration.length < 4) {
                    durationString = `${duration[0]} ${duration[1]} ${duration[2]}`
                }

                if (duration.length < 3) {
                    durationString = `0 ${duration[0]} ${duration[1]}`
                }

                if (duration.length < 2) {
                    durationString = `0 0 ${duration[0]}`
                }

                duration = durationString.split(' ')

                durationSeconds = parseInt(duration[0]) * 3600 + parseInt(duration[1]) * 60 + parseInt(duration[2])

                totalSeconds += (durationSeconds)
            })

            nextPageToken = plResponse.data.nextPageToken
            if (!nextPageToken) {
                break;
            }
        }

        let [minutes, seconds] = [parseInt((totalSeconds / speed) / 60), parseInt((totalSeconds / speed) % 60)]
        let hours = parseInt(minutes / 60)
        minutes = parseInt(minutes % 60)

        res.status(200).json({
            status: 'success',
            data: {
                numberOfVideos: length,
                title: title,
                description: description,
                channelTitle: channelTitle,
                duration: parseInt(totalSeconds / speed),
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                thumbs: thumbs,
            }
        })
    } catch (e) {
        res.status(500).json({
            status: 'fail',
            message: e.message
        })
    }
}

app.post('/api/calculate', calculateDuration)


const searchPlaylists = async (req, res) => {
    try {

        const response = await youtube.search.list({
            key: api_key,
            part: 'snippet',
            maxResults: 5,
            q: req.body.query,
            type: 'playlist'
        })

        const titles = []

        response.data.items.forEach(item => {
            titles.push(
                {
                    title: item.snippet.title,
                    description: item.snippet.description,
                    id: item.id.playlistId,
                    thumbnail: [item.snippet.thumbnails.default.url, item.snippet.thumbnails.medium.url]
                }
            )
        })

        res.status(200).json({
            status: 'success',
            length: titles.length,
            data: {
                titles: titles
            }
        })

    } catch (e) {
        res.status(400).json({
            status: 'fail',
            message: e.message
        })
    }
}

app.post('/api/search', searchPlaylists)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`server started at port: ${port}`)
})