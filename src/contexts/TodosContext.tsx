import { createContext, Dispatch, useContext, useReducer } from "react";

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodosState = Todo[];

const TodosStateContext = createContext<TodosState | undefined>(undefined);
// Provider를 사용하지 않았을 때에는 Context의 값이 undefined 가 되어야 하므로 <TodosState | undefined>

type Action =
  | {
      type: "CREATE";
      text: string;
    }
  | {
      type: "TOGGLE";
      id: number;
    }
  | {
      type: "REMOVE";
      id: number;
    };

type TodosDispatch = Dispatch<Action>;
const TodosDispatchContext = createContext<TodosDispatch | undefined>(
  undefined
);

const todosReducer = (state: TodosState, action: Action) => {
  switch (action.type) {
    case "CREATE":
      const nextId = Math.max(...state.map((todo) => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.text,
        done: false,
      });
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      const removeId = action.id;
      return state.filter((todo) => todo.id !== removeId);
    default:
      throw new Error("Unhandled action");
  }
};

export const TodosContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [todos, dispatch] = useReducer(todosReducer, [
    {
      id: 1,
      text: "Context API 배우기1",
      done: true,
    },
    {
      id: 2,
      text: "TypeScript 배우기1",
      done: true,
    },
    {
      id: 3,
      text: "TypeScript 와 Context API 함께 사용하기1",
      done: false,
    },
  ]);
  return (
    <TodosDispatchContext.Provider value={dispatch}>
      <TodosStateContext.Provider value={todos}>
        {children}
      </TodosStateContext.Provider>
    </TodosDispatchContext.Provider>
  );
};

export const useTodosState = () => {
  const state = useContext(TodosStateContext);
  if (!state) throw new Error("TodosProvider not found");
  return state;
};

export const useTodosDispatch = () => {
  const dispatch = useContext(TodosDispatchContext);
  if (!dispatch) throw new Error("TodosProvider not found");
  return dispatch;
};
