export const Flowers = ({ bouquet }) => {
  // const array= ['rose', 'lily', 'marigold']

  const filterData = bouquet.filter(({ flowers }) => flowers.includes("rose"));
  console.log(filterData);
  return (
    // bouquet.map(({flowers,price})=>flowers.map(data=>data==="rose"?<h1>Price of bouquet with roses : {price}</h1>:""))
  

    <>
      {filterData.map(({ price },i) => (
        <h2 key ={i}>Price of bouquet with roses: {price}</h2>
      ))}
    </>
  );
};
