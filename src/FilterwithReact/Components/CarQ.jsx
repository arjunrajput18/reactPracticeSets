import React, { useState } from "react";

const cars = [
  { make: "Toyota", model: "Camry", year: 2022, price: 24900 },
  { make: "Honda", model: "Civic", year: 2021, price: 22000 },
  { make: "Ford", model: "F-150", year: 2023, price: 35000 },
  { make: "Chevrolet", model: "Equinox", year: 2020, price: 18900 },
  { make: "Toyota", model: "Model S", year: 2022, price: 89990 },
  { make: "Ford", model: "M5", year: 2021, price: 103500 },
  { make: "Chevrolet", model: "S-Class", year: 2022, price: 122750 },
];

export const CarQ = () => {
  const [selectedCar, setSelectedCar] = useState("All");


const filterData=selectedCar==="All"?cars:cars.filter(({make})=>make===selectedCar)
  return (
    <>
      <form>
        {["All", "Toyota", "Honda", "Ford", "Chevrolet"].map((data,i) => (
          <label key={i}>
            <input
              type="radio"
              value={data}
              name="car"
              checked={selectedCar === data}
              onChange={(e) => setSelectedCar(e.target.value)}
            />
            {data}
          </label>
        ))}
      </form>
 <ul>
    {filterData.map(({make,model,year,price},i)=><li key={i}>{make} {model} {year} {price}</li>)}
 </ul>
 
    </>
  );
};
