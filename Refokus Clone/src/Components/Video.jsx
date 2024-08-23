import { MdArrowOutward } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Video({ url, para, image = false, index }) {
  useGSAP(() => {
    gsap.from(`.forward-${index}`, {
      y: 200,
      scrollTrigger: {
        scroller: "body",
        trigger: `.forward-${index}`,
        start: "top 100%",
        end: "top 0",
        scrub: 1,
      },
    });
  });

  return (
    <div
      className={`forward-${index} forward-right-video w-full h-full overflow-hidden`}
    >
      <div
        className="video h-[85%] w-full overflow-hidden relative
      "
      >
        {image ? (
          <img
            className="h-full w-full object-cover rounded-[1vw]"
            src={url}
            alt=""
          />
        ) : (
          <video
            className="h-full w-full object-cover rounded-[1vw]"
            muted
            loop
            autoPlay
            src={url}
          ></video>
        )}

        <div className="read absolute bottom-3 px-2 h-[4vh] w-[4vh] flex items-center text-2xl rounded-full left-3 z-10 text-black bg-white">
          <MdArrowOutward></MdArrowOutward>
        </div>
        <span className="absolute whitespace-nowrap text-sm bottom-[1.1vw] opacity-0 text-black z-10 left-14">
          Read Article
        </span>
      </div>

      <p className="text-xl text-white mt-7">{para}</p>
    </div>
  );
}

export default Video;
