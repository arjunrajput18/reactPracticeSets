import React, { useContext } from "react";
import { ForumContext } from "../context/ForumContext";
import { ForumCard } from "../component/ForumCard";

export const Questions = () => {
  const { forumData } = useContext(ForumContext);

  // console.log("s",forumData)
  return (
    <ul>
      {forumData.map((data) => (
        <>
          <ForumCard {...data} noDetail/>
        </>
      ))}
    </ul>
  );
};
