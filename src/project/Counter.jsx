import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="w-screen h-screen flex bg-amber-300">
      <div className="counter m-auto text-center">
        <div className="text-9xl m-6 font-bold">{count}</div>
        <div className="flex gap-6">
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 rounded font-bold bg-red-500 active:bg-red-900"
          >
            Decrement
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 rounded font-bold bg-red-500 active:bg-red-900"
          >
            Reset
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 rounded font-bold bg-red-500 active:bg-red-900"
          >
            Increment
          </button>
        </div>
      </div>
    </section>
  );
}

export default Counter;
