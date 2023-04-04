import React, { useState } from 'react'
 const workouts = [
    { name: 'Push-ups', duration: '10 minutes', equipment: 'bodyweight', difficulty: 'Beginner' },
    { name: 'Resistance band curls', duration: '20 minutes', equipment: 'resistance bands', difficulty: 'Intermediate' },
    { name: 'Dumbbell squats', duration: '30 minutes', equipment: 'dumbbells', difficulty: 'Advanced' }
]
export const GymQ = () => {
const [selectedEquipment,setSelectedEquipment]=useState([])
//[]
const checkedHandler=(e)=>{
const isChecked=e.target.checked
const equipment=e.target.value
if(isChecked){
    setSelectedEquipment([...selectedEquipment,equipment])
}else{
    setSelectedEquipment(selectedEquipment.filter((c)=>c!==equipment))
}
}
const filterData=workouts.filter(({equipment})=>selectedEquipment.includes(equipment))
console.log(filterData)
  return (
    <>
{["bodyweight","resistance bands","dumbbells"].map((equipment,i)=>
<label key={i}>
    <input
    type='checkbox'
    value={equipment}
    checked={selectedEquipment.includes(equipment)}
    onChange={checkedHandler}
    />{equipment}
</label>
)}

<ul> {
    filterData.map(({name,duration, equipment, difficulty})=><li key={name}>{name}{duration}{equipment}{difficulty}</li>)
}</ul>

    </>
  )
}
