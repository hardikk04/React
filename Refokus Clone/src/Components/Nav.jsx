import React from "react";
import Button from "./Button";

function Nav() {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-b-zinc-600">
      <div className="flex">
        <img src="/images/logo.svg" alt="" />
        <div className="links flex gap-12 ml-[5vw]">
          {["Home", "Work", "About", "News", "Careers"].map((item, index) => {
            return (
              <a
                key={index}
                href="#"
                className="text-sm flex items-center gap-1 ff"
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.25em #00ff19" }}
                    className="h-[5px] w-[5px] rounded-full shadow bg-green-500 inline-block"
                  ></span>
                )}
                {item}
              </a>
            );
          })}
        </div>
      </div>
      <Button></Button>
    </div>
  );
}

export default Nav;
