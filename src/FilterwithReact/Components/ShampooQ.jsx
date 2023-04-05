// import React, { useState } from 'react';

// const shampooData = [
//   { id: 1, name: 'Head & Shoulders', gender: 'men' },
//   { id: 2, name: 'Pantene', gender: 'women' },
//   { id: 3, name: 'Dove', gender: 'women' },
//   { id: 4, name: 'Garnier Fructis', gender: 'men' },
//   { id: 5, name: 'LOreal Paris', gender: 'women' },
//   { id: 6, name: 'Herbal Essences', gender: 'women' },
//   { id: 7, name: 'Dove Men+Care', gender: 'men' },
//   { id: 8, name: 'Suave', gender: 'unisex' },
//   { id: 9, name: 'Tresemme', gender: 'unisex' },
// ];

// function App() {
//   const [selectedGender, setSelectedGender] = useState('all');
//   const filteredShampoos = selectedGender === 'all' ? shampooData : shampooData.filter(shampoo => shampoo.gender === selectedGender);

//   const handleGenderChange = (event) => {
//     setSelectedGender(event.target.value);
//   }

//   return (
//     <div>
//       <h1>Shampoo List</h1>
//       <form>
//         <label>
//           <input type="radio" name="gender" value="all" checked={selectedGender === 'all'} onChange={handleGenderChange} />
//           All
//         </label>
//         <label>
//           <input type="radio" name="gender" value="men" checked={selectedGender === 'men'} onChange={handleGenderChange} />
//           Men
//         </label>
//         <label>
//           <input type="radio" name="gender" value="women" checked={selectedGender === 'women'} onChange={handleGenderChange} />
//           Women
//         </label>
//         <label>
//           <input type="radio" name="gender" value="unisex" checked={selectedGender === 'unisex'} onChange={handleGenderChange} />
//           Unisex
//         </label>
//       </form>
//       <ul>
//         {filteredShampoos.map(shampoo => (
//           <li key={shampoo.id}>
//             <h2>{shampoo.name}</h2>
//             <p>Gender: {shampoo.gender}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react'
const shampooData = [
  { id: 1, name: 'Head & Shoulders', gender: 'men' },
  { id: 2, name: 'Pantene', gender: 'women' },
  { id: 3, name: 'Dove', gender: 'women' },
  { id: 4, name: 'Garnier Fructis', gender: 'men' },
  { id: 5, name: 'LOreal Paris', gender: 'women' },
  { id: 6, name: 'Herbal Essences', gender: 'women' },
  { id: 7, name: 'Dove Men+Care', gender: 'men' },
  { id: 8, name: 'Suave', gender: 'unisex' },
  { id: 9, name: 'Tresemme', gender: 'unisex' },
];
export const ShampooQ = () => {
const [selectedGender,setSelectedGender]=useState("All")


const checkHandler=e=>{
    console.log(e.target.value)
    setSelectedGender(e.target.value)
}


const filterselectedGender=selectedGender==="All"?shampooData:shampooData.filter(({gender})=>gender===selectedGender)
// console.log(filterselectedGender)
  return (
    <>
        <form>
            <label>
                <input type='radio' value="All" name="gender" checked={selectedGender==="All"} onChange={checkHandler}/>All
            </label>
            <label>
                <input type='radio' value="men" name="gender" checked={selectedGender==="men"}  onChange={checkHandler}/>men
            </label>
            <label>
                <input type='radio' value="women" name="gender" checked={selectedGender==="women"}  onChange={checkHandler}/>women
            </label>
            <label>
                <input type='radio' value="unisex" name="gender" checked={selectedGender==="unisex"}  onChange={checkHandler}/>unisex
            </label>
        </form>
<ul>
    {filterselectedGender.map(({name,gender})=><li key={name}>{name}{gender}</li>)}
</ul>

    </>
  )
}
