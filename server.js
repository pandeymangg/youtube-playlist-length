const express = require("express");
const { google } = require("googleapis");
const path = require("path");

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const api_key = process.env.API_KEY;
const app = express();

const youtube = google.youtube("v3");

app.use(express.json());

const calculateDuration = async (req, res) => {
  try {
    let videoIds = [];

    let hourRegex = /(\d+)H/g;
    let minuteRegex = /(\d+)M/g;
    let secondRegex = /(\d+)S/g;

    let nextPageToken = null;
    let durationSeconds = 0;
    let totalSeconds = 0;
    let speed = parseFloat(req.body.speed) || "1";
    let thumbs = [];
    let length = 0;
    let title = "";
    let channelTitle = "";
    let description = "";

    const testResponse = await youtube.playlists.list({
      key: api_key,
      part: "snippet",
      id: req.body.id,
    });

    title = testResponse.data.items[0].snippet.title;
    channelTitle = testResponse.data.items[0].snippet.channelTitle;
    description = testResponse.data.items[0].snippet.description;

    thumbs.push(testResponse.data.items[0].snippet.thumbnails);

    while (true) {
      const plResponse = await youtube.playlistItems.list({
        key: api_key,
        part: "contentDetails, snippet",
        playlistId: req.body.id,
        maxResults: 50,
        pageToken: nextPageToken,
      });

      videoIds = [];
      plResponse.data.items.forEach((item) =>
        videoIds.push(item.contentDetails.videoId)
      );

      length += videoIds.length;

      const vidResponse = await youtube.videos.list({
        key: api_key,
        part: "contentDetails",
        id: videoIds.join(","),
      });

      vidResponse.data.items.forEach((item) => {
        const hour =
          item.contentDetails.duration
            ?.match(hourRegex)?.[0]
            ?.replace("H", "") || 0;
        const min =
          item.contentDetails.duration
            ?.match(minuteRegex)?.[0]
            ?.replace("M", "") || 0;
        const sec =
          item.contentDetails.duration
            ?.match(secondRegex)?.[0]
            ?.replace("S", "") || 0;

        durationSeconds =
          parseInt(hour) * 3600 + parseInt(min) * 60 + parseInt(sec);

        totalSeconds += durationSeconds;
      });

      nextPageToken = plResponse.data.nextPageToken;
      if (!nextPageToken) {
        break;
      }
    }

    let [minutes, seconds] = [
      parseInt(totalSeconds / speed / 60),
      parseInt((totalSeconds / speed) % 60),
    ];
    let hours = parseInt(minutes / 60);
    minutes = parseInt(minutes % 60);

    res.status(200).json({
      status: "success",
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
      },
    });
  } catch (e) {
    res.status(500).json({
      status: "fail",
      message: e.message,
    });
  }
};

app.post("/api/calculate", calculateDuration);

const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`server started at port: ${port}`);
});
