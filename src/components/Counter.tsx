import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState<number>(0);
  // useState 타입 유추를 알아서 잘 할 경우 제너릭<>를 사용하지 않아도 상관없다.
  // 주로 상태가 null 일수도 아닐수도 있을 때 제너릭을 사용한다.

  const up = (): void => {
    setNum(num + 1);
  };
  const down = (): void => {
    setNum(num + -1);
  };

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={up}>Up</button>
      <button onClick={down}>Down</button>
    </div>
  );
};

export default Counter;
