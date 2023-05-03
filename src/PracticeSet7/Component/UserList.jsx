import React, { useState } from "react";

export const UserList = ({ showUsers }) => {
const [selectedChecked,setSelectedChecked]=useState("All")



  const filterData=selectedChecked==="All"?showUsers:showUsers.filter(({company})=>company===selectedChecked)
  return (
    <>
      <h2>Users</h2>
      <label>
        Filter by Company:
        <select onChange={(e)=>setSelectedChecked(e.target.value)}>
          <option value={"All"}>All Companies</option>
          <option value={"XYZ Corp"}>XYZ Corp</option>
          <option value={"ABC Inc"}>ABC Inc</option>
          <option value={"ACME Corp"}>ACME Corp</option>
        </select>
      </label>

      <ul>
        <br />
        {filterData.map(({ name, email, website, company }) => (
          <li key={name}>
            <div>{name}</div>
            <div>{email}</div>
            <div>{website}</div>
            <div>{company}</div>
          </li>
        ))}
      </ul>
    </>
  );
};
