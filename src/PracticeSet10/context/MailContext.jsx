import React, { createContext, useReducer } from "react";
import { mails } from "../Data";

export const MailContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "unread":
      return {
        ...state,
        checkBox: state.checkBox.includes(action.payLoad)
          ? state.checkBox.filter((data) => data !== action.payLoad)
          : [...state.checkBox, action.payLoad],
      };

    case "isStarred":
      return {
        ...state,
        checkBox: state.checkBox.includes(action.payLoad)
          ? state.checkBox.filter((data) => data !== action.payLoad)
          : [...state.checkBox, action.payLoad],
      };

    case "Delete":

    console.log(mails);
      return {
        ...state,
        mails: state.mails.filter((data) => {
      
          return data.mId !== action.payLoad.mId}),
        trashEmails: [...state.trashEmails, action.payLoad],
      };

    case "starClick":
      return {
        ...state,
        mails: state.mails.map((data) => {
          console.log(data.mId === action.payLoad, data.subject);

          return data.mId === action.payLoad
            ? { ...data, isStarred: !data.isStarred }
            : data;
        }),
      };

    case "spam":
      return {
        ...state,
        mails: state.mails.filter((data) => data.mId !== action.payLoad.mId),
        spamEmails: [...state.spamEmails, action.payLoad],
      };

    case "markAsUnread":
      return {
        ...state,
        mails: state.mails.map((data) =>
          data.mId === action.payLoad.mId
            ? { ...data, unread: !data.unread }
            : data
        ),
      };

    default:
      return state;
  }
};

const initialState = {
  mails,
  checkBox: [],
  trashEmails: [],
  spamEmails: [],
};


export const MailProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCheckbox = (data) => {
    dispatch({ type: data, payLoad: data });
  };
  console.log(state.mails,"og");
  const deleteHandler = (data) => {
    dispatch({ type: "Delete", payLoad: data });
  };
  const spamHandler = (data) => {
    dispatch({ type: "spam", payLoad: data });
  };

  const starClickHandler = (starID) => {
    dispatch({ type: "starClick", payLoad: starID });
  };
  console.log(mails, "o");

  const markAsUnreadHandler = (data) => {
    dispatch({ type: "markAsUnread", payLoad: data });
  };
  return (
    <MailContext.Provider
      value={{
        EmailsData: state.mails,
        checkBox: state.checkBox,
        handleCheckbox,
        starClickHandler,
        deleteHandler,
        spamHandler,
        trashEmails: state.trashEmails,
        spamEmails: state.spamEmails,
        markAsUnreadHandler,
        mails
      }}
    >
      {children}
    </MailContext.Provider>
  );
};
