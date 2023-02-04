import React, { useReducer } from "react";
type Action =
  | {
      type: "INCREASE";
    }
  | {
      type: "DECREASE";
    };

const reducer = (state: number, action: Action): number => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      throw new Error("Unhandled action");
  }
};

const Counter2 = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: "INCREASE" });
  const onDecrease = () => dispatch({ type: "DECREASE" });

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>Up</button>
      <button onClick={onDecrease}>Down</button>
    </div>
  );
};

export default Counter2;
