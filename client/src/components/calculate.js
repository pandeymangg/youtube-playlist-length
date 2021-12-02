import React, { useState, useEffect } from "react";
import axios from "axios";
import PlayList from "./playlist";
import Spinner from "./spinner";
import ErrorComp from "./errorComp";

function Calculate({ match }) {
  const playlistId = match.params.playlistId;
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!playlistId) {
      return;
    }

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
  if (loading) return <Spinner />;
  if (error) return <ErrorComp error={error} />;

  return <PlayList response={response} />;
}

export default Calculate;
