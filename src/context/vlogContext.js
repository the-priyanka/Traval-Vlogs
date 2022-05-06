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

  const fetchVlogs = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      const { videos } = data;
      if (videos.length !== 0) {
        const newVlogs = videos.map((item) => {
          const {
            frameBorder,
            allowFullScreen,
            title,
            url,
            allow,
            category,
          } = item;
          return {
            frameBorder,
            allowFullScreen,
            title,
            url,
            allow,
            category,
          };
        });
        setVlogs(newVlogs);
        setError({ show: false, msg: "" });
      } else {
        setVlogs([]);
        setError({ show: true, msg: "No Match here!" });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const allCategories = [
    "all",
    ...new Set(vlogs.map((item) => item.category)),
  ];

  useEffect(() => {
    fetchVlogs(`${url}${query}`);
  }, [query]);
  return (
    <AppContext.Provider
      value={{
        isLoading,
        error,
        vlogs,
        query,
        setQuery,
        allCategories,
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
