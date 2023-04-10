// import React, { useEffect, useState } from "react";
// import { fakeFetch5 } from "../Data";
// import { ShowBaker } from "./ShowBaker";

// export const SocialMedia = () => {
//   const [socialMediaData, setSocialMediaData] = useState([]);

//   const [showBakery, setShowBakery] = useState([]);

//   const fakeData = async (url) => {
//     try {
//       const {
//         status,
//         data: { posts },
//       } = await fakeFetch5(url);

//       if (status === 200) {
//         setSocialMediaData(posts);
//         setShowBakery(posts);
//       }
//       console.log(posts);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fakeData("https://example.com/api/posts");
//   }, []);

//   return (
//     <>
//       {showBakery.map(({ caption, src, views, likes, category }) => (
//         <>
//           <div style={{ display: "inline-block" }}>
//             <img src={src} alt={caption} style={{ Padding: "2rem 2rem" }} />
//             <p>views: {views}</p>
//             <p>likes: {likes}</p>
//             <p> category: {category}</p>
//           </div>
//         </>
//       ))}
//       <ShowBaker
//         setShowBakery={setShowBakery}
//         socialMediaData={socialMediaData}
//         label={"show bakery"}
//       />
//     </>
//   );
// };

import React, { useState } from "react";

export const SocialMedia = ({ showData }) => {

const [toggleData,setToggleData]=useState(false)

const filterData=toggleData?showData.filter(({category})=>category==="Bakery"):showData


  return (
    <div>
      {filterData.map(({ caption, src, views, likes, category }) => (
        <>
          <div style={{ display: "inline-block" }}>
            <img src={src} alt={caption} style={{ Padding: "2rem 2rem" }} />
            <p>views: {views}</p>
            <p>likes: {likes}</p>
            <p> category: {category}</p>
          </div>
        </>
      ))}

      <button  onClick={()=>setToggleData(!toggleData)}>Show Bakery</button>
    </div>
  );
};
