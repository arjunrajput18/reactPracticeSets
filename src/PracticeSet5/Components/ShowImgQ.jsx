import React, { useEffect, useState } from "react";
import { fakeFetch3 } from "../Data";

export const ShowImgQ = ({ height, width, heading }) => {
  const [imageData, setImageData] = useState({});
  const FakeData = async () => {
    try {
      const { status, data } = await fakeFetch3("https://example.com/api/user");

      status === 200 && setImageData(data);
      // console.log(data.name)
    } catch (error) {
      console.log(error);
    }
  };
  const { name, likes, comments, image } = imageData;
  useEffect(() => {
    FakeData();
  }, []);

  return (
    <>
      <h1>{heading}</h1>
      <img src={image} alt="hi" height={height} width={width} />
      <p>name:{name}</p>
      <p>like:{likes}</p>
      <p>comment:{comments}</p>
    </>
  );
};
