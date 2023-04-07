import React, { useEffect, useState } from "react";
import { fakeFetch4 } from "../Data";

export const Users2Q = () => {
  const [showData, setShowData] = useState([]);
const [loading,setLoading]=useState(true)
  const getData = async () => {
    try {
      const { status, data } = await fakeFetch4(
        "https://example.com/api/users"
      );
      status === 200 && setShowData(data);
      setLoading(false)
      console.log("ibdsfjkb")
    } catch ({ status, message }) {
      console.log(status);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>user feed</h1>
      <ul>
    {  loading?<p>loading....</p>:  showData.map(({ name, image, likes, comments }) => (
          <li>
            <img src={image} alt="loading" height={250}/>
            <p>{name}</p>
            <p>likes :{likes}</p>
            <p>comments:{comments}</p>{" "}
          </li>
        ))}
      </ul>
    </>
  );
};
