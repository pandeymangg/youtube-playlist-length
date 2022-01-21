import { google, youtube_v3 } from "googleapis";
import { config } from "dotenv";
import express from "express";
import path from "path";

const app = express();

const youtube: youtube_v3.Youtube = google.youtube("v3");
config({ path: "./config.env" });

app.use(express.json());

const api_key = process.env.API_KEY;
const playlistId = "PLz3-lGEW1dbKWdGKzEqwmrlZaQa45HLBz";

let videoIds: string[] = [];
let hourRegex = /(\d+)H/g;
let minuteRegex = /(\d+)M/g;
let secondRegex = /(\d+)S/g;

let nextPageToken: any = null;
let durationSeconds = 0;
let totalSeconds = 0;

async function getResponse() {
  try {
    while (true) {
      const plResponse: any = await youtube.playlistItems.list({
        key: api_key,
        part: ["contentDetails, snippet"],
        playlistId,
        maxResults: 50,
        pageToken: nextPageToken,
      });

      videoIds = [];
      plResponse?.data?.items.forEach((item: youtube_v3.Schema$PlaylistItem) =>
        videoIds.push(item?.contentDetails?.videoId!)
      );

      const vidResponseParams: youtube_v3.Params$Resource$Videos$List = {
        key: api_key,
        part: ["contentDetails"],
        id: videoIds,
      };
      const vidResponse: any = await youtube.videos.list(vidResponseParams);

      vidResponse.data.items.forEach(
        (item: youtube_v3.Schema$Video, index: number) => {
          const hour =
            item?.contentDetails?.duration
              ?.match(hourRegex)?.[0]
              ?.replace("H", "") || "0";
          const min =
            item?.contentDetails?.duration
              ?.match(minuteRegex)?.[0]
              ?.replace("M", "") || "0";
          const sec =
            item?.contentDetails?.duration
              ?.match(secondRegex)?.[0]
              ?.replace("S", "") || "0";

          durationSeconds =
            parseInt(hour) * 3600 + parseInt(min) * 60 + parseInt(sec);

          totalSeconds += durationSeconds;
        }
      );

      nextPageToken = plResponse.data.nextPageToken;
      if (!nextPageToken) {
        break;
      }
    }

    let [minutes, seconds] = [
      Math.floor(totalSeconds / 60),
      Math.floor(totalSeconds % 60),
    ];

    let hours = Math.floor(minutes / 60);
    minutes = Math.floor(minutes % 60);
  } catch (e: any) {
    console.log(e.message);
  }
}

app.post("/api/calculate", getResponse);

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
