import React, { useRef, useState } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Owners() {
  const owners = [
    {
      url: "/images/owner1.jpg",
      name: "Katie Kearsey",
      para: "We had a wonderful experience working with Refokus for our recent website redesign. We were grateful for their partnership, guidance, patience, and expertise. They're masters of their craft, they helped us evolve our brand and level up our website, and we're incredibly proud of where we netted out.",
      work: "Right Side Up",
      isActive: true,
    },
    {
      url: "/images/owner2.png",
      name: "Ron Rofé",
      para: "Working with Refokus is an absolute pleasure, they are artists of their craft, work with passion and patience to understand the objective and reach it in an ultimate way!",
      work: "Rainfall - Venture Capital",
      isActive: false,
    },
    {
      url: "/images/owner3.jpg",
      name: "Eugene Ernoult",
      para: "Refokus was efficient and proactive in achieving quality results. The final output was well made and created a huge impact with regards to brand awareness for our brand. The experience also managed to bag several awards and was mentioned during the keynote of Webflow Conf. Refokus’ response timing was always on point as well.",
      work: "Like Magic",
      isActive: false,
    },
    {
      url: "/images/owner4.jpg",
      name: "Mike Conover",
      para: "Our collaboration with Refokus was incredibly effective. They have an insightful, senior team spanning many functions and they created a striking, articulate landing page for our AI startup that I'm extremely satisfied with. I showed some of the early design explorations to a friend who works on Apple's Interaction Design team and he remarked that the creative range was unusual to see from a single agency.",
      work: "Brighwave",
      isActive: false,
    },
  ];

  const [data, setData] = useState(owners[0]);
  const [index, setIndex] = useState(owners);

  const box = useRef(null);

  useEffect(() => {
    let counter = 1;
    setInterval(() => {
      const i = counter % 4;

      setData(owners[i]);
      setIndex((prev) => {
        return prev.map((item, index) => {
          if (index === i) {
            return { ...item, isActive: true };
          } else {
            return { ...item, isActive: false };
          }
        });
      });

      if (data.isActive) {
        gsap.from(box.current, {
          opacity: 0,
          duration: 0.5,
        });
      }

      counter++;
    }, 3000);
  }, []);

  return (
    <div className="w-full flex justify-center py-[12vw]">
      <div className="w-[50%] h-[30vh] flex items-center gap-4">
        <div className="index flex flex-col gap-1">
          {index.map((item, i) => (
            <div
              key={i}
              className={`transition-all index-1  w-[1px] ${
                item.isActive ? `h-[2vw] bg-zinc-300` : ` h-[1vw] bg-zinc-500`
              }`}
            ></div>
          ))}
        </div>
        <div ref={box} className="flex items-center gap-[3vw]">
          <div className="owner-img shrink-0 h-full w-72 rounded-[1vw] overflow-hidden">
            <img className="w-full h-full object-cover" src={data.url} alt="" />
          </div>
          <div className="owners-dets">
            <p>{data.para}</p>
            <h3 className="font-bold mt-8"> {data.name}</h3>
            <span className="text-sm text-zinc-500 inline-block">
              {data.work}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Owners;
