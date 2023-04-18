import React from "react";
import "./Q2/style.css";
import { Routes, Route } from "react-router-dom";
// import { Home } from "./Q1/pages/Home";
import { NavBar1 } from "./Q2/component/NavBar1";

// import { Sent } from "./Q1/pages/Sent";
// import { Inbox } from "./Q1/pages/Inbox";
// import { EmailDetail } from "./Q1/pages/EmailDetail";
// import { SentDetails } from "./Q1/pages/SentDetails";
import { Favorite } from "./Q2/pages/Favorite";
import { Profile } from "./Q2/pages/Profile";
import { Read } from "./Q2/pages/Read";
import { Home1 } from "./Q2/pages/Home1";
import { Home3 } from "./Q3/pages/Home3";
import { Menu } from "./Q3/pages/Menu";
import { Cart } from "./Q3/pages/Cart";
import { NavBar3 } from "./Q3/component/NavBar3";
// export const Question1 = () => {
//   return (
//     <>
//       <Home />
//       <Routes>
//         <Route path="/inbox" element={<Inbox />}></Route>
//         <Route path="/sent" element={<Sent />}></Route>
//         <Route path="/inbox/:emailId" element={<EmailDetail />}></Route>
//         <Route path="/sent/:sentId" element={<SentDetails />}></Route>
//       </Routes>
//     </>
//   );
// };

export const Question2 = () => {
  return (
    <>
      <NavBar1 />
      <Routes>
        <Route path="/" element={<Home1 />}></Route>
        <Route path="/favorites" element={<Favorite />}></Route>
        {/* <Route path="/favorites/:favId" element={<Favorite />}></Route> */}
        <Route path="/read" element={<Read />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </>
  );
};

export const Question3 = () => {
  return (
    <>
      <NavBar3 />
      <Routes>
        <Route path="/" element={<Home3 />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};
