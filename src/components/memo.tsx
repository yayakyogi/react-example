import React, { useState } from "react";

// Example cara pakai props custom comparasion pada memo
// const MyComponent = React.memo(
//   (props) => { /* ... */ },
//   (prevProps, nextProps) => {
//     return prevProps.value === nextProps.value;
//   }
// );

const ChildComponent = React.memo(({ count }: { count: number }) => {
  console.log("Child rendered");
  return <div>Count: {count}</div>;
});

const MemoComponent = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br />
      <input
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />
      <br />
      <ChildComponent count={count} />
    </div>
  );
};

export default MemoComponent;
