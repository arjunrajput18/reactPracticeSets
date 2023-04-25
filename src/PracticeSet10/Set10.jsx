import React from "react";
import { Header } from "./component/Header";
import { Route, Routes } from "react-router-dom";
import { Inbox } from "./pages/Inbox";
import { Spam } from "./pages/Spam";
import { Trash } from "./pages/Trash";
import { Filters } from "./component/Filters";
import { MailDetails } from "./pages/MailDetails";

export const Set10 = () => {
  return (
    <>
      <Header />
      <Filters />
      <Routes>
        <Route path="/" element={<Inbox />}></Route>
        <Route path="/spam" element={<Spam />}></Route>
        <Route path="/trash" element={<Trash />}></Route>
        <Route path="/inbox/:inboxId" element={<MailDetails />}></Route>
      </Routes>
    </>
  );
};
