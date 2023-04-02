export const Flowers=({bouquet})=>{
    const array= ['rose', 'lily', 'marigold']
    return (
      bouquet.map(({flowers,price})=>flowers.map(data=>data==="rose"?<h1>Price of bouquet with roses : {price}</h1>:""))
    // array.map((data)=>data==="rose"?<h1>{data}</h1>:"")
    )
}