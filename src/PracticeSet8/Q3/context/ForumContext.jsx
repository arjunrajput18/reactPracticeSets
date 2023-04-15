import React, { createContext, useEffect, useState } from "react";
import { fakeFetch3 } from "../../Data";

export const ForumContext = createContext();

export const ForumProvider = ({ children }) => {
  const [forumData, setForumData] = useState([]);

  const fakeData = async (url) => {
    try {
      const {
        status,
        data: { questions },
      } = await fakeFetch3(url);
      if (status === 200) {
        console.log(questions,"q")
        setForumData(questions);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fakeData("https://example.com/api/questions");
  }, []);

  return (
    <ForumContext.Provider value={{forumData}}>{children}</ForumContext.Provider>
  );
};
