import React, { useState } from "react";
export const jobData = [
  {
    company: "Acme Inc.",
    jobTitle: "Software Engineer",
    JobType: "full-time",
    location: "San Francisco, CA",
    salary: 120000,
  },
  {
    company: "XYZ Corp.",
    jobTitle: "Marketing Manager",
    JobType: "part-time",
    location: "New York, NY",
    salary: 100000,
  },
  {
    company: "ABC Co.",
    jobTitle: "Data Analyst",
    JobType: "full-time",
    location: "Chicago, IL",
    salary: 80000,
  },
  {
    company: "MNO LLC",
    jobTitle: "Sales Representative",
    JobType: "contract",
    location: "Miami, FL",
    salary: 70000,
  },
  {
    company: "PQR Inc.",
    jobTitle: "Product Manager",
    JobType: "part-time",
    location: "Seattle, WA",
    salary: 130000,
  },
];
//Create a React app that displays a list of job postings with properties like company, job title, location, and salary. Implement a checkbox for each job type (e.g. full-time, part-time, contract) and filter the displayed list of job postings to show only those with the selected job type(s), using the filter() function.
export const JobQ = () => {
  const [selectedJobType, setSelectedJobType] = useState([]);

const checkedHandler=(e)=>{

const isChecked=e.target.checked;
const JobType=e.target.value;

if(isChecked){
    setSelectedJobType([...selectedJobType,JobType])
}else{
    setSelectedJobType(selectedJobType.filter((c)=>c!==JobType))
}

}
const  filterJob=jobData.filter(({JobType})=>selectedJobType.includes(JobType))
console.log(filterJob)
  return (
    <>
      {["full-time", "part-time", "contract"].map((data) => (
        <label key={data}>
          <input
            type="checkbox"
            value={data}
            checked={selectedJobType.includes(data)}
             onChange={checkedHandler}
          />
          {data}
        </label>
      ))}
      <ul>
        {filterJob.map(({jobTitle,company,JobType})=><li key={jobTitle}>{jobTitle}{company}{JobType}</li>)}
      </ul>
    </>
  );
};
