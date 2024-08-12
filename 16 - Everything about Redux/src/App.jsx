import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "./Store/Counter/CouterSlice";

function App() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="bg-zinc-700 h-screen w-full text-white flex justify-center items-center flex-col">
      <h1>{value}</h1>
      <button
        onClick={() => {
          dispatch(incrementAsync(10));
        }}
        className="px-4 py-2 rounded-lg bg-white text-black mt-5"
      >
        Add by one
      </button>
    </div>
  );
}

export default App;
