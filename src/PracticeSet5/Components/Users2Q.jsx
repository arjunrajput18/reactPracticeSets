import React, { useEffect, useState } from "react";
import { fakeFetch4 } from "../Data";

export const Users2Q = () => {
  const [showData, setShowData] = useState([]);
const [loading,setLoading]=useState(true)
const [errorMsg,setErrorMsg]=useState("");
  const getData = async () => {
    try {
      const { status, data } = await fakeFetch4(
        "https://exampe.com/api/users"
      );
      setLoading(false)

      status === 200 && setShowData(data);
      
    } catch ({ status, message }) {
      setLoading(false)
      setErrorMsg(`${status} ${message}`);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    {  loading?<h1>loading....</h1>:<div>
    
     {!errorMsg &&<h1>user feed</h1>}
      <ul>
      {showData.map(({ name, image, likes, comments }) => (
          <li key={name}>
            <img src={image} alt="loading" height={250}/>
            <p>{name}</p>
            <p>likes :{likes}</p>
            <p>comments:{comments}</p>{" "}
          </li>
        ))}
      </ul></div>}
     

      {errorMsg&& <h1>{errorMsg}</h1>}
    </>
  );
};
