// Create a React app that displays a list of employees with their name, age, position, and salary. Implement a feature that allows users to input a salary value and filters the displayed list of employees to show only those whose salary is greater than or equal to the input value, using the filter() function.

import React, { useState } from "react";
import {employees } from "../Data.jsx"
export const Employees = () => {

    const [data,setData]=useState([])
    const changeHandler=(e)=>{
    const newEmployees=employees.filter(({salary})=>salary>=e.target.value)
    // console.log(newEmployees)
    setData(newEmployees)
    }
  return (
    <>
      <input onChange={changeHandler} type="number" />
      <ul>
      {data.map(({name,age,position,salary},i)=><li key={i}> name:{ name} age:{ age} position:{position} salary:{salary}</li>)}
      </ul>

    </>
  );
};
