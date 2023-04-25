import React, { useContext } from "react";
import { MailContext } from "../context/MailContext";

export const Filters = () => {
  const { handleCheckbox } = useContext(MailContext);

  return (
    <>
      <label>
        <input type="checkbox" onChange={() => handleCheckbox("unread")} />
        Show unread mails
      </label>
      <label>
        <input type="checkbox" onChange={() => handleCheckbox("isStarred")}
        />
        Show starred mails
      </label>
    </>
  );
};
