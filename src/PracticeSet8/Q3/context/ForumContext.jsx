import React, { createContext, useEffect, useState } from "react";
import { fakeFetch3 } from "../../Data";

export const ForumContext = createContext();

export const ForumProvider = ({ children }) => {
  const [forumDataDetails, setForumDataDetails] = useState({
    forumData:[],
    loading:true,
    errorData:null
  });

  const fakeData = async () => {
    try {
      const {
        status,
        data: { questions },
      } = await fakeFetch3("https://example.com/api/questions");
      if (status === 200) {
      
        setForumDataDetails((prev)=>({...prev,forumData:questions}));
      }
    } catch (error) {
      setForumDataDetails((prev)=>({...prev,errorData:error}))
    }finally{
      setForumDataDetails((prev)=>({...prev,loading:false}))
    }
  };

  useEffect(() => {
    fakeData();
  }, []);
  

  const {forumData,loading,errorData}=forumDataDetails

  return (
    <ForumContext.Provider value={{forumData}}>
    {loading?<p>loading...</p>:errorData?<h3>{errorData.message}</h3>:
      <>{children}</>
    }
    </ForumContext.Provider>
  );
};
