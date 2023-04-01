// import React from 'react'
// import {useState} from "react"
// export const ColorPicker = ({red,blue,green}) => {
//   const [color,setColor]=useState({
//     red:"",blue:"",green:""
//   })
// const clickHandler=color=>{
// if(color==="red") setColor({red:red})
// else if (color==="blue") setColor({blue:blue})
// else if(color==="green")setColor({green:green})
// }
//     return (
//     <>
//         <button onClick={()=>clickHandler("red")}>Red</button>
//         <p>{color.red}</p>
//         <button onClick={()=>clickHandler("blue")}>Blue</button>
//         <p>{color.blue}</p>
//         <button onClick={()=>clickHandler("green")}>Green</button>
//          <p>{color.green}</p> 
//     </>
//   )
// }
import React, { useState } from 'react'
export const ColorPicker = ({ red, blue, green }) => {
  const [hexCode, setColor] = useState({
    red: "",
    blue: "",
    green: ""
  });

//   const showHexcode = (color, hex) => {
//     // console.log(color);
//     setHexCode({ [color]: hex });
//   };
const clickHandler=color=>{
if(color==="red") setColor({red:red})
else if (color==="blue") setColor({blue:blue})
else if(color==="green")setColor({green:green})
}
const colors=["red","blue","green"]
  return (
    <>
{
    colors.map((data)=>{
        return (
            <div>
                <button onClick={()=>clickHandler(data)}>{data}</button>
                <p>{hexCode[data]}</p>
            </div>
        )
    } )
}




      {/* <div>
        <button onClick={() => showHexcode("red", red)}>Red</button>
        <p>{hexCode.red}</p>
      </div>
      <div>
        <button onClick={() => showHexcode("blue", blue)}>Blue</button>
        <p>{hexCode.blue}</p>
      </div>
      <div>
        <button onClick={() => showHexcode("green", green)}>Green</button>
        <p>{hexCode.green}</p>
      </div> */}



    </>
  );
};





//     import React, { useState } from 'react'
// export const ColorPicker = ({ red, blue, green }) => {
//   const [hexCode, setHexCode] = useState({
//     red: "",
//     blue: "",
//     green: ""
//   });

//   const showHexcode = (color, hex) => {
//     // console.log(color);
//     setHexCode({ [color]: hex });
//   };

//   return (
//     <>
//       <div>
//         <button onClick={() => showHexcode("red", red)}>Red</button>
//         <p>{hexCode.red}</p>
//       </div>
//       <div>
//         <button onClick={() => showHexcode("blue", blue)}>Blue</button>
//         <p>{hexCode.blue}</p>
//       </div>
//       <div>
//         <button onClick={() => showHexcode("green", green)}>Green</button>
//         <p>{hexCode.green}</p>
//       </div>
//     </>
//   );
// };
    