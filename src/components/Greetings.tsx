import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void; // 아무것도 리턴 X
};

// React.FC 지양
const Greetings = ({ name, mark, optional, onClick }: GreetingsProps) => {
  const handleClick = () => {
    onClick(name);
  };
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

Greetings.defaultProps = {
  mark: "!",
};

export default Greetings;
