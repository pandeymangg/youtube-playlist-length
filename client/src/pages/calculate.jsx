import React, { useState, useEffect } from "react";
import axios from "axios";
import PlayList from "../components/Playlist";
import ErrorComp from "../components/ErrorComp";
import LoadingSkeleton from "../components/LoadingSkeleton";

function Calculate({ match }) {
  const playlistId = match.params.playlistId;
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!playlistId) {
      return;
    }

    setLoading(true);
    setResponse(null);
    setError(null);

    async function getResponse() {
      try {
        const response = await axios.post("/api/calculate", {
          id: playlistId,
        });

        setResponse(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error.response);
        setLoading(false);
      }
    }

    getResponse();
  }, [playlistId]);

  if (!playlistId) return;
  if (loading) return <LoadingSkeleton />;
  if (error) return <ErrorComp error={error} id={playlistId} />;

  return <PlayList response={response} />;
}

export default Calculate;
