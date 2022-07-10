# YouTube Playlist Length Calculator

![yt-pl-len](/data/images/ytPLLEN.JPG)

This is a web app that calculates the length of a YouTube playlist. This is helpful for anyone who wants to learn something from a youtube tutorial series or a course
and wants to find out how much time will it take it finish.

It also shows the length of a playlist at increased speeds of 1.25x, 1.50x, 1.75x and 2x.

This web app is built with reactjs. react-router-dom is also used for routing in the app. It has a simple backend for making GET requests to the YouTube API v3.
The backend is built with expressjs.

## How Does It Work ?

You need to paste the link of the YouTube Playlist in the input box and hit the calculate button. If you can't find the link of the Playlist, it will also work with only the Playlist Id or the link of any video from that Playlist as well!.

## Build Instructions

#### Building the server

1. Head over to [YouTube API docs](https://developers.google.com/youtube/v3) and generate a new API key.
2. Move to the root directory and rename example.config.env to config.env and paste your api key under API_KEY
3. Install node modules by running `yarn` or `npm install`.
4. Run the server code using `yarn dev` or `npm run dev`.

#### Building the client

1. Move to the `/client` directory and install node modules by running `yarn` or `npm install`.
2. Run the client code using `yarn start` or `npm run start`.
