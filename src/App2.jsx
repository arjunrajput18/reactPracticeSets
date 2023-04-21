import { useReducer } from "react";
import "./styles.css";

export default function App() {
  const counterReducer = (acc, value) => {
    console.log(acc, "a");
    switch (value.type) {
      case "INCREMENT":
        return { ...acc, count: acc.count + 1 };
      case "DECREMENT":
        return { ...acc, count: acc.count - 1 };
      default:
        console.log("Something went wrong");
        break;
    }
    return acc;
  };

  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  console.log(state, "s");
  return (
    <div className="App">
      <h1 className="app-header"> tanaypratap's box </h1>
      <h2>write your app here</h2>

      <p>Count : {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}


//const clickHandler=()=>{
  //toggleData=true
  // const filterData=toggleData?productData.filter(()quantity) :productData
//  setToggleData(!to)
// }

//  