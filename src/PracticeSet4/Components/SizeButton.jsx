// import React, { useState } from 'react'
// // Build a React component with two buttons + and - which increases/decreases the font size of a heading text “Welcome” by 1px. Keep the initial font size to 18px. Use useState Hook.
// export const SizeButton = () => {
// const [sizeCounter,setSizeCounter]=useState(16)
  
// const clickhandler=(e)=>{
//     const type=e.target.innerText
// // console.log(type)
//     if(type==="+"){

//         setSizeCounter(()=>sizeCounter+5)
//     }else{
//         setSizeCounter(()=>sizeCounter-5)

//     }
// }

// return (
//     <>
//     <h1 style={{fontSize:`${sizeCounter}px`}}>“Welcome”</h1>
// <button onClick={(e)=>clickhandler(e)}>+</button>


// <button onClick={clickhandler}>-</button>
//     </>
//   )
// }


import React, { useState } from 'react'
// Build a React component with two buttons + and - which increases/decreases the font size of a heading text “Welcome” by 1px. Keep the initial font size to 18px. Use useState Hook.
export const SizeButton = () => {
const [sizeCounter,setSizeCounter]=useState(16)
  
return (
    <>
    <h1 style={{fontSize:`${sizeCounter}px`}}>“Welcome”</h1>
<button onClick={()=>setSizeCounter(sizeCounter+1)}>+</button>
<button onClick={()=>setSizeCounter(sizeCounter-1)}>-</button>
    </>
  )
}
