import React, { useEffect, useState } from "react";
import { fakeFetch6 } from "../Data";

const CommentComponent = ({ commentData, setCommentData }) => {
  //   const [newCommentData, setNewCommentData] = useState([]);
  // const [deletedData,setDeletedData]=useState([])
  //   console.log("i",newCommentData)
  //   console.log(commentData)
  const handleClick = (data) => {
    const filterData = commentData.filter(({ text }) => data !== text);

    setCommentData(filterData);
  };

  return (
    <>
      {commentData.map(({ name, text }, i) => (
        <li key={i}>
          <h2>{name}</h2>
          <p>{text}</p>
          <button onClick={() => handleClick(text)}>Delete</button>
        </li>
      ))}
    </>
  );
};

export const CommentQ = () => {
  const [commentData, setCommentData] = useState([]);
  const fakeData = async () => {
    try {
      const {
        status,
        data: { comments },
      } = await fakeFetch6("https://example.com/api/comments");
      status === 200 && setCommentData(comments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fakeData();
  }, []);

  return (
    <>
      <h1>Comments</h1>
      <ul>
        <CommentComponent
          commentData={commentData}
          setCommentData={setCommentData}
        />
      </ul>
    </>
  );
};
