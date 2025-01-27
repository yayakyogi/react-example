import React, { useMemo, useState } from "react";

const calculation = (calculate: number) => {
  console.log("render calculation");

  for (let i = 0; i < 100000000; i++) {
    calculate += i;
  }

  return calculate;
};

const UseMemo: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const calculate = useMemo(() => {
    return calculation(count);
  }, [count]);

  const [todos, setTodos] = useState<string[]>([]);

  const increment = () => setCount(count + 1);

  const addTodo = () => {
    setTodos([...todos, "new todos"]);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <h2>{calculate}</h2>
      <button onClick={addTodo}>Add Todos</button>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    </div>
  );
};

export default UseMemo;
