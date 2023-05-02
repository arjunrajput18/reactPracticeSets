import React, { useEffect, useState } from "react";
import { fakeFetch5 } from "../Data";


const ListComponent=({messages})=>{
  return(
    <>
        <ul >
              {messages.map(({ from, message }, i) => (
                <li key={i}>
                  <b>{from}</b>:{message}
                </li>
              ))}
            </ul>
    </>
  )
}

export const ChatsQ = () => {
  const [showMsg, setShowMsg] = useState([]);
const [showloading,setShowLoading]=useState(true)
  const fakeData = async () => {
    const { status, data } = await fakeFetch5(
      "https://example.com/api/userchat"
    );
    setShowLoading(false)
    if (status === 200) {

      setShowMsg(data);

    }
  };

  useEffect(() => {
    fakeData();
  }, []);

  return (
    <>
      
      
    {showloading && <p>loading....</p>}
     <ul>
        {  showMsg.map(({ name, messages }) => (
          <li key={name}>
            <h1>{name}`s Chat</h1>
          <ListComponent  messages={messages}/>
          </li>
        ))}
      </ul>
    </>
  );
};
