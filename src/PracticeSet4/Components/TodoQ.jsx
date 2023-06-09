// import React, { useState } from "react";



// export const TodoQ = ({ todoItems }) => {
//   const [removeElement, setremoveElement] = useState(todoItems);
//   //id
//   //id==!id
//   const removeHandler = (idR) => {
//     console.log(idR);
//     const filterData = removeElement.filter(({ id }) => id !== idR);

//     setremoveElement(filterData);
//   };
//   return (
//     <>
//       <ul>
//         {removeElement.map(({ id, task, isDone }) => {
//           return (
//             <li
//               style={{ textDecoration: isDone ? "line-through" : "none" }}
//               key={id}
//             >
//               {task} <button onClick={() => removeHandler(id)}>X</button>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };





import { useState } from "react";

export const TodoQ = ({ items }) => {
  const ListItems = ({ items }) => {
    return (
      <div>
        <h2>Ques 4a </h2>
        <ul>
          {items.map(({ id, task }) => (
            <li key={id}>{task}</li>
          ))}
        </ul>
      </div>
    );
  };

  const CompletedItems = ({ items }) => {
    return (
      <div>
        <h2>Ques 4b </h2>
        <ul>
          {items.map(({ id, task, isDone }) => (
            <li key={id} style={{ textDecoration: isDone && "line-through" }}>
              {task}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const RemoveItem = ({ items }) => {
    const [data, setData] = useState(items);

    const removeElement = (checkId) => {
      const filteredArr = data.filter(({ id }) => id !== checkId);
      // console.log(filteredArr)
      setData(filteredArr);
    };
    return (
      <div>
        {" "}
        <h2> Ques 4c </h2>
        <ul>
          {data.map(({ id, task }) => {
            return (
              <li key={id}>
                {task}
                <button onClick={() => removeElement(id)}>X</button>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div style={{ textAlign: "left" }}>
      <h1> TODO list </h1>
      <ListItems items={items} />
      <CompletedItems items={items} />
      <RemoveItem items={items} />
    </div>
  );
};
