import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

function Work() {
  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function showNhide(arr) {
      setImages((prev) => {
        return prev.map((item, index) => {
          if (arr.indexOf(index) === -1) {
            return { ...item, isActive: false };
          } else {
            return { ...item, isActive: true };
          }
        });
      });
    }

    switch (Math.floor(data * 100)) {
      case 0:
        showNhide([]);
        break;
      case 1:
        showNhide([0]);
        break;
      case 2:
        showNhide([0, 1]);
        break;
      case 3:
        showNhide([0, 1, 2]);
        break;
      case 4:
        showNhide([0, 1, 2, 3]);
        break;
      case 5:
        showNhide([0, 1, 2, 3, 4]);
        break;
      case 6:
        showNhide([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  const showNhide = (value) => {};

  const [images, setImages] = useState([
    { url: "/images/img1.png", top: "50%", left: "50%", isActive: false },
    { url: "/images/img2.png", top: "56%", left: "44%", isActive: false },
    { url: "/images/img3.png", top: "45%", left: "56%", isActive: false },
    { url: "/images/img4.png", top: "60%", left: "53%", isActive: false },
    { url: "/images/img5.png", top: "43%", left: "40%", isActive: false },
    { url: "/images/img6.png", top: "65%", left: "55%", isActive: false },
  ]);

  return (
    <div className="w-full">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[32vw] font-[500] tracking-tight leading-none select-none">
          work
        </h1>
        <p className="text-zinc-500 font-medium text-lg">
          Web Design. Webflow Development. Creative Development
        </p>
        <div className="absolute h-full w-full top-0">
          {images.map((img, index) => {
            return (
              img.isActive && (
                <img
                  key={index}
                  style={{ left: img.left, top: img.top }}
                  className="absolute object-cover -translate-x-[50%] -translate-y-[50%] w-72 rounded-lg"
                  src={img.url}
                  alt=""
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
