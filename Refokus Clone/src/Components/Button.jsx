import { IoIosReturnRight } from "react-icons/io";

function Button({ title = "Get Started", bg = true }) {
  return (
    <div
      className={`w-40 py-2 px-4  ${
        bg ? "border-none" : "border"
      }  ${
        bg ? "bg-zinc-100" : "bg-black"
      } rounded-full ${
        bg ? "text-black" : "text-white"
      }  flex justify-between items-center`}
    >
      <span className="text-sm ff">{title}</span>
      <IoIosReturnRight></IoIosReturnRight>
    </div>
  );
}

export default Button;
