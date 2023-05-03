import React, { useContext } from "react";
import { ForumContext } from "../context/ForumContext";
import { NavLink, useParams } from "react-router-dom";
import { ForumCard } from "../component/ForumCard";

export const Answer = () => {
  const { forumData } = useContext(ForumContext);
  const { answerId } = useParams();

  const showAnswer = forumData.find(({ id }) => id === Number(answerId));
  console.log(showAnswer)
  console.log("m", showAnswer);
  return (
    <>
      <ul>
        <ForumCard data={showAnswer} />
      </ul>
    <NavLink to="/question">Show All Question</NavLink>
    </>

  );
};
