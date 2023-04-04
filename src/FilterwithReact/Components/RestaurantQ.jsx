// import React, { useState } from 'react'
// import { restaurants } from '../Data'


// // Create a React app that displays a list of restaurants with their name, cuisine, location, and rating. Implement a checkbox for each cuisine type (e.g. Italian, Mexican, Chinese) and filter the displayed list of restaurants to show only those that serve the selected cuisine type(s), using the filter() function.


// export const RestaurantQ = () => {

//     const [cuisineType,setCuisineType]=useState(null)
//   const handlerCheck=(type)=>{
// setCuisineType(type)
//   }
//   const filterData=cuisineType?restaurants.filter(({cuisine})=>cuisine===cuisineType):restaurants
//     return (
//     <>
//     <label><input type='checkbox' onClick={()=>{handlerCheck("Italian")}} /> Italian</label>
//     <label><input type='checkbox' onClick={()=>{handlerCheck("Mexican")}} /> Mexican</label>
//     <label><input type='checkbox' onClick={()=>{handlerCheck("Chinese")}} /> Chinese</label>
// <ul>
//     {filterData.map(({name,cuisine,location,rating})=><li>{name} {cuisine}{location}{rating}</li>)}
// </ul>
//     </>


//   )
// }

// import React, { useState } from 'react';

// const restaurants = [
//   { name: 'Pizza Hut', cuisine: 'Italian', location: 'New York', rating: 4.2 },
//   { name: 'Taco Bell', cuisine: 'Mexican', location: 'Los Angeles', rating: 3.8 },
//   { name: 'Panda Express', cuisine: 'Chinese', location: 'San Francisco', rating: 4.5 },
//   { name: 'McDonalds', cuisine: 'Fast food', location: 'Chicago', rating: 3.7 },
//   { name: 'Subway', cuisine: 'Sandwiches', location: 'Seattle', rating: 4.0 },
// ];

// export const RestaurantQ = () => {
//   const [selectedCuisines, setSelectedCuisines] = useState([]);
 
//   const handleCheckboxChange = (event) => {
//     const cuisine = event.target.value;
//     const isChecked = event.target.checked;

//     if (isChecked) {
//       setSelectedCuisines([...selectedCuisines, cuisine]);
//     } else {
//       setSelectedCuisines(selectedCuisines.filter((c) => c !== cuisine));
    
//     }
//   };

//   const filteredRestaurants = restaurants.filter((r) =>
//     selectedCuisines.includes(r.cuisine)
//     );

//   return (
//     <div>
//       <h1>Restaurants</h1>
//       <div>
//         {['Italian', 'Mexican', 'Chinese', 'Fast food', 'Sandwiches'].map(
//           (cuisine) => (
//             <label key={cuisine}>
//               <input
//                 type="checkbox"
//                 value={cuisine}
//                 checked={selectedCuisines.includes(cuisine)}
//                 onChange={handleCheckboxChange}
//               />{' '}
//               {cuisine}
//             </label>
//           )
//         )}
//       </div>
//       <ul>
//         {filteredRestaurants.map((restaurant) => (
//           <li key={restaurant.name}>
//             <div>Name: {restaurant.name}</div>
//             <div>Cuisine: {restaurant.cuisine}</div>
//             <div>Location: {restaurant.location}</div>
//             <div>Rating: {restaurant.rating}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }





import React, { useState } from 'react'
const restaurants = [
    { name: 'Pizza Hut', cuisine: 'Italian', location: 'New York', rating: 4.2 },
    { name: 'Taco Bell', cuisine: 'Mexican', location: 'Los Angeles', rating: 3.8 },
    { name: 'Panda Express', cuisine: 'Chinese', location: 'San Francisco', rating: 4.5 },
    { name: 'McDonalds', cuisine: 'Fast food', location: 'Chicago', rating: 3.7 },
    { name: 'Subway', cuisine: 'Sandwiches', location: 'Seattle', rating: 4.0 },
  ];
export const RestaurantQ = () => {
 const [selectedCuisine,setSelectedCuisines]=useState([])

const checkHandler=(e)=>{
    const isChecked=e.target.checked;//false
    const cuisine=e.target.value;//mexican

    if(isChecked){
        setSelectedCuisines([...selectedCuisine,cuisine])
    }else{
        setSelectedCuisines(selectedCuisine.filter((c)=>c!==cuisine))//
    }

}
const restaurantFilter=restaurants.filter(({cuisine})=>selectedCuisine.includes(cuisine))

console.log(restaurantFilter)
    return (
    <>
<h1>Restaurant</h1>
{
    ["Italian","Mexican","Chinese"].map((cuisine)=>(
        <label key={cuisine}><input
        type={'checkbox'}    
        value={cuisine}
        checked={selectedCuisine.includes(cuisine)}
        onChange={checkHandler}
        />{cuisine}</label>
    ))
}

<ul >
{restaurantFilter.map(({name,cuisine})=><li key={cuisine}>{name}{cuisine}</li>)}
</ul>

    </>
  )
}


























