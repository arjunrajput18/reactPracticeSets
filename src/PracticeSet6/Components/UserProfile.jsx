import React from "react";

export const UserProfile = ({ getData,setGetData }) => {
    // console.log("...")

const clickHandler=()=>{
    console.log(getData)
//  getData={...getData,name:"Emily"}

 setGetData((prevData)=>({...prevData,name:"Emily"}))
console.log(getData)
}


  return (
    <>
      
        <div>
        <h2>Profiles</h2>
          <div>
            <strong>Name</strong>: {getData.name}
          </div>
          <div>
            <strong>age</strong>: {getData.age}
          </div>
          <div>
            <strong>gender</strong>: {getData.gender}
          </div>
          <div>
            <strong>email</strong>: {getData.email}
          </div>
          <div>
            <strong>occupation</strong>: {getData.occupation}
          </div>
        </div>
        <button onClick={clickHandler}>Update Name</button>
   
    </>
  );
};
