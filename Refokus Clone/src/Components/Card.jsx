import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "./Button";

function Card({ item }) {

  return (
    <div
      className={`w-[${item.width}] h-full rounded-[1vw] bg-[#29292E] p-[1vw] flex flex-col justify-between hover:bg-[#7443FF] transition-all hover:p-[1.5vw]`}
    >
      <div>
        <div className="flex justify-between items-center">
          <h3>{item.intro}</h3>
          <IoIosArrowRoundForward className="text-xl"></IoIosArrowRoundForward>
        </div>
        <h1 className="text-4xl mt-6 font-semibold w-[70%]">
          {item.secondTitle}
        </h1>
      </div>
      <div>
        {item.isButton ? (
          <div>
            <h1 className="text-8xl font-bold">Start a Project</h1>
            <button className="bg-transparent px-[2vw] py-[.7vw] border rounded-full mt-[1.5vw]">
              Contact us
            </button>
          </div>
        ) : (
          <p className="w-[60%] leading-[1.4]">
            Web Design, Webflow Development, and Creative Development.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
