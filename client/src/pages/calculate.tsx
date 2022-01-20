import { useState, useEffect } from "react";
import axios from "axios";
import PlayList from "../components/Playlist";
import ErrorComp from "../components/ErrorComp";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { useParams } from "react-router-dom";
export interface IState {
  response: {
    duration: number;
    hours: number;
    minutes: number;
    seconds: number;
    title: string;
    numberOfVideos: number;
  };
}

const Calculate: React.FC = () => {
  const params = useParams();

  const playlistId = params.playlistId;
  const [response, setResponse] = useState<IState["response"] | null>(null);
  const [error, setError] = useState<string | null>(null);
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
        if (axios.isAxiosError(error)) {
          setError("error");
        }
        setLoading(false);
      }
    }

    getResponse();
  }, [playlistId]);

  if (!playlistId) return null;
  if (loading) return <LoadingSkeleton />;
  if (error) return <ErrorComp />;

  if (!response) return null;

  return <PlayList response={response} />;
};

export default Calculate;
