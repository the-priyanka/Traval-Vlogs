import React, { useContext, createContext } from "react";

const AppContext = createContext();

const VideoProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{}}>{children}</AppContext.Provider>
  );
};

export const useVideoContext = () => {
  return useContext(AppContext);
};
export { AppContext, VideoProvider };
