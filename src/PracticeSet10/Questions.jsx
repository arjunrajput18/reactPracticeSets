import React from "react";
import { Set10 } from "./Set10";
import { BrowserRouter } from "react-router-dom";
import {  MailProvider } from "./context/MailContext";

export const Questions = () => {
  return (
    <>
      <BrowserRouter>
      <MailProvider>
      <Set10 />
      </MailProvider>
       
      </BrowserRouter>
    </>
  );
};
