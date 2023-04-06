import React from "react";
import { Question1,Question2,Question3,Question4 } from "./Set4";

export const Questions = () => {
  return (
    <ul>
      <li>
        <Question1 />
      </li>
      <hr />
      <li>
        <Question2 />
      </li>
      <hr />
      <li>
        <Question3 />
      </li>
      <hr/>
      <li>
        <Question4 />
      </li>
      <hr/>
    </ul>
  );
};
