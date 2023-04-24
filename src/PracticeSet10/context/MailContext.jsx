import React, { createContext, useReducer } from "react";
import { mails } from "../Data";

export const MailContext = createContext();


const reducer=(state,action)=>{
switch(action.type){

  case "unread":

    return {...state,checkBox:state.checkBox.includes(action.payLoad)?state.checkBox.filter((data)=>data!==action.payLoad):[...state.checkBox,action.payLoad]}

  case "isStarred":
    return {...state,checkBox:state.checkBox.includes(action.payLoad)?state.checkBox.filter((data)=>data!==action.payLoad):[...state.checkBox,action.payLoad]}

  default:
    return state

}
}

const initialState={
mails,
checkBox:[]
}

export const MailProvider = ({ children }) => {

const [state,dispatch]=useReducer(reducer,initialState)


const handleCheckbox=(data)=>{

  dispatch({type:data,payLoad:data})
}


  return (
    <MailContext.Provider
      value={{
        EmailsData:state.mails,
        checkBox:state.checkBox,
        handleCheckbox
      }}
    >
      {children}
    </MailContext.Provider>
  );
};
