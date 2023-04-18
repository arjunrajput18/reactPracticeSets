import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { fakeFetch } from "../../Data";

export const EmailContext = createContext();

export const EmailContextProvider = ({ children }) => {
  const [emailsData, setEmailsData] = useState({});
    
  console.log("e", emailsData);
  const fakeData = async (url) => {
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setEmailsData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fakeData("https://example.com/api/allemails");
  }, []);

  const clickHandler = (idR) => {
    console.log("1")
    const readData = emailsData.emails.map((item) => item.id === idR ? { ...item, read: !item.read } :  item )
    // const readData={sentEmails:emailsData.sentEmails,emails:emailsData.emails.map((item)=>item.id===idR?{...item,read:!item.read}:{item})}
 console.log("read",readData)
 setEmailsData({ sentEmails: emailsData.sentEmails, emails : readData })
    // setEmailsData(readData)
  };

  return (
    <EmailContext.Provider value={{ emailsData, clickHandler }}>
      {children}
    </EmailContext.Provider>
  );
};
