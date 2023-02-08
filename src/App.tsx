import React from "react";
import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import { TodosContextProvider } from "./contexts/TodosContext";
// import Counter from "./components/Counter";
// import Counter2 from "./components/Counter2";
// import Greetings from "./components/Greetings";
// import MyForm from "./components/MyForm";
// import ReducerSample from "./components/ReducerSample";

const App = () => {
  // const onClick = (name: string) => {
  //   console.log(`${name} says hello`);
  // };
  // const onSubmit = (form: { name: string; des: string }) => {
  //   console.log(form);
  // };
  return (
    <div>
      {/* <Greetings name={"woo"} onClick={onClick} />
      <Counter />
      <Counter2 />
      <MyForm onSubmit={onSubmit} />
      <ReducerSample /> */}
      <TodosContextProvider>
        <TodoForm />
        <TodoList />
      </TodosContextProvider>
    </div>
  );
};

export default App;
