import React from "react";
import {  Question2 } from "./Sets9";
import { BrowserRouter as Router } from "react-router-dom";
// import { VideoProvider } from "./Q4/context/VideoContext";
// import { FoodProvider } from "./Q3/context/FoodContext";
import {  BookProvider } from './Q2/context/BookContext'
// import { EmailContextProvider } from './Q1/context/EmailContext'
export const Questions = () => {
  return (
    <>
      <Router>
        <ol>
          <li>
            {/* <EmailContextProvider> */}
            {/* <Question1/> */}
            {/* </EmailContextProvider> */}
          </li>
          <hr />
          <li key={1}>
      <BookProvider>
        <Question2/>
      </BookProvider>

    </li>

          {/* <li key={2}>
          <FoodProvider>
            <Question3 />
          </FoodProvider>
          </li> */}
{/* 
          <li key={2}>
          <VideoProvider>
          <Question4 />
          </VideoProvider>
            
     
          </li> */}
        </ol>
      </Router>
    </>
  );
};
