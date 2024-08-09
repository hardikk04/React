import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="w-full flex justify-center gap-12 mt-4">
      <Link className="text-2xl" to={"/"}>
        Home
      </Link>
      <Link className="text-2xl" to={"/show"}>
        Show
      </Link>
    </div>
  );
}

export default Nav;
