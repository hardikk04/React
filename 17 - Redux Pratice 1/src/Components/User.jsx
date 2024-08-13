import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { userDelete } from "../Store/Slices/UserReducer";

function Home() {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(userDelete(index));
  };
  return (
    <div className="flex justify-center items-center flex-col text-white mt-5">
      {users.map((user, index) => {
        return (
          <div key={user.id} className="flex gap-2 mt-2">
            <h1>{user.name}</h1>
            <span
              onClick={() => handleDelete(index)}
              className="text-red-500 cursor-pointer"
            >
              X
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
