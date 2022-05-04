import React, {
  useContext,
  createContext,
  useEffect,
  useState,
} from "react";

const url = `${process.env.REACT_APP_VLOG_API_KEY}`;

const AppContext = createContext();

const VlogProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [vlogs, setVlogs] = useState([]);
  const [query, setQuery] = useState("");
  const [person, setPerson] = useState(null);

  const fetchVlogs = async (url) => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    fetchVideos(data);
    getVideo(data);
  };

  const fetchVideos = async (data) => {
    try {
      const { videos } = data;

      if (videos) {
        const newVlogs = videos.map((item) => {
          const { frameBorder, allowFullScreen, title, url, allow } =
            item;
          return {
            frameBorder,
            allowFullScreen,
            title,
            url,
            allow,
          };
        });
        setVlogs(newVlogs);
      } else {
        setVlogs([]);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getVideo = async (data) => {
    const { videos } = data;
    const video = videos[0];

    const { frameBorder, allowFullScreen, title, url, allow } = video;
    const newSingleVideo = {
      frameBorder,
      allowFullScreen,
      title,
      url,
      allow,
    };
    setPerson(newSingleVideo);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchVlogs(url);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        error,
        vlogs,
        query,
        setQuery,
        getVideo,
        person,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useVlogContext = () => {
  return useContext(AppContext);
};
export { AppContext, VlogProvider };
