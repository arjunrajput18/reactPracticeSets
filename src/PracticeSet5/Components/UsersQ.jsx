import React, { useEffect, useState } from "react";
import { fakeFetch } from "../Data";

// Create a React component where all the users are fetched using fake fetch and listed on the DOM. Show the online users in green color and the offline users in red color.

export const UsersQ = () => {
    const [userData,setUserData]=useState([])
    const [errorData,setErrorData]=useState("")
  const fakeData = async () => {

    try{
      
        const { status, data } = await fakeFetch(
          "https://example.com/api/users/status"
        );
        status === 200 && setUserData(data.users);
    }catch({status,message}){
        setErrorData(`${status} ${message}`)
    }
  
  };

  // const fakeData= ()=>{
  //     fakeFetch("https://examplge.com/api/users/status").then((response)=>{
  // console.log(response.data)
  //     }).catch(error=>console.log(error))
  // }

  useEffect(() => {
    fakeData();
  }, []);

  return (
    <>
      <h1>Online users</h1>
      <ul>
        {userData.map(({name,status}) => (
          <li style={{color:status==="Online"?"green":"blue"}} key={name}>{name} </li>
        ))}
      </ul>
      {errorData&&<p>{errorData}</p>}
    </>
  );
};
