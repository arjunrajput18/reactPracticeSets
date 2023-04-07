import React, { useEffect, useState } from "react";
import { fakeFetch5 } from "../Data";


const ListComponent=({messages,name})=>{
  return(
    <>
        <ul key={name}>
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

    if (status === 200) {
      console.log(data);
      setShowLoading(false)
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
          <li>
            <h1>{name}`s Chat</h1>
          <ListComponent name={name} messages={messages}/>
          </li>
        ))}
      </ul>
    </>
  );
};
