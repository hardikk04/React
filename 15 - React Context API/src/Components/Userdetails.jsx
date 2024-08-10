import React, { useContext } from "react";
import { userContext } from "../Context/Context";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function Userdetails() {
  const { id } = useParams();

  const navigate = useNavigate();
  const { users, setUsers } = useContext(userContext);

  return (
    <div>
      <h1 className="text-3xl text-red-400">{users[id].name}</h1>
      <p className="text-red-400">{users[id].city}</p>
      <button
        className="px-4 py-2 rounded-md bg-blue-400 text-white"
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default Userdetails;
