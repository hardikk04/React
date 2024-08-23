import Button from "./Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Product({ item, index }) {
  useGSAP(() => {
    gsap.from(`.product-${index}`, {
      width: "80%",
      y: 20,
      scrollTrigger: {
        scroller: "body",
        trigger: `.product-${index}`,
        start: "top 100%",
        end: "top 0",
        scrub: 1,
      },
    });
  });

  return (
    <div
      style={{ backgroundColor: item.bgColor }}
      className={`product-${index} w-full my-[3vw] h-[90vh] rounded-[1vw] p-[1.5vw] flex gap-6 justify-center`}
    >
      <div className="product-left h-full w-1/2 flex justify-between flex-col">
        <h1 className="text-3xl tracking-widest h-[12%] font-semibold uppercase">
          {item.title}
        </h1>
        <div className="flex justify-end h-[35%]">
          <div className="img1 w-[60%] rounded-[.5vw] overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={item.image1}
              alt=""
            />
          </div>
        </div>
        <div className="img2 w-full overflow-hidden h-[46%] rounded-[.5vw]">
          <img
            className="h-full w-full object-cover"
            src={item.image2}
            alt=""
          />
        </div>
      </div>
      <div className="product-right h-full w-1/2">
        <div className="product-right-video w-full rounded-[.5vw] h-[70%] overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            src={item.video}
          ></video>
        </div>
        <div className="product-right-dets pl-5">
          <p className="mt-[2vw] font-[500]">{item.rightP1}</p>
          <h3 className="text-2xl leading-[1.1] my-5 font-semibold">
            {item.rightP2}
          </h3>

          <Button title="Visit Website"></Button>
        </div>
      </div>
    </div>
  );
}

export default Product;
