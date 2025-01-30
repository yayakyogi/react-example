/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState, memo } from "react";

function UseCallback() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState<boolean>(false);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const changeToggle = () => setToggle(!toggle);

  return (
    <div>
      <button onClick={changeToggle}>Toggle {toggle ? "True" : "False"}</button>
      <hr />
      <Child increment={increment} />
      <hr />
      <h2>{count}</h2>
    </div>
  );
}

// Wrap Child with React.memo
const Child = memo(({ increment }: any) => {
  console.log("Child component re-render");
  return <button onClick={increment}>Tambah</button>;
});

export default UseCallback;
