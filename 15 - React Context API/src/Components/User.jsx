import React, { useContext } from "react";
import { userContext } from "../Context/Context";
import { Link } from "react-router-dom";

function User() {
  const { users, setUsers } = useContext(userContext);

  return (
    <div className="flex gap-4">
      {users.map((user, index) => (
        <Link
          to={`/users/${index}`}
          key={index}
          className="px-4 py-2 bg-blue-300 w-fit rounded-md text-white"
        >
          User
        </Link>
      ))}
    </div>
  );
}

export default User;
