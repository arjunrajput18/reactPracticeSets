import React, { useState } from 'react'
// Create a React app that displays a list of events with properties like name, date, location, and ticket price. Implement a checkbox for each event type (e.g. music, sports, theater) and filter the displayed list of events to show only those with the selected event type(s), using the filter() function.

export const eventsData = [
    { name: 'Concert', date: '2023-04-05', location: 'Staples Center', ticketPrice: 50, eventType: 'music' },
    { name: 'Basketball Game', date: '2023-04-06', location: 'Madison Square Garden', ticketPrice: 100, eventType: 'sports' },
    { name: 'Play', date: '2023-04-07', location: 'Broadway Theater', ticketPrice: 75, eventType: 'theater' },
    { name: 'pause', date: '2023-04-07', location: 'Broadway Theater', ticketPrice: 75, eventType: 'theater' }
  ];



export const ShowQ = () => {
    
    const [selectedEventType,setSelectedEventType]=useState([])

const checkHandler=(e)=>{
   const  eventType=e.target.value
   const  isChecked=e.target.checked

    if(isChecked){
        setSelectedEventType([...selectedEventType,eventType])
    }else{
        setSelectedEventType(selectedEventType.filter((c)=>c!==eventType))
    }

}

const filterData=eventsData.filter(({eventType})=>selectedEventType.includes(eventType))
console.log(filterData)
    return (
    <>
        { 
["music","sports","theater"].map((eventType,i)=>
    <label key={i}> 
    <input type="checkbox"
    value={eventType}
        checked={selectedEventType.includes(eventType)}
        onChange={checkHandler}
    />
    {eventType}</label>
)
        }
<ul>

        {filterData.map(({name,eventType,date,location,ticketPrice})=>
        <li key={name}>
        <div>{name}</div>
        <div>{eventType}</div>
        <div>{date}</div>
        <div>{location}</div>
        <div>{ticketPrice}</div>
        </li>
        )}

</ul>
    </>
  )
}
