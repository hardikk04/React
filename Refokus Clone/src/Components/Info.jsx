import Video from "./Video";

function Info() {
  return (
    <div className="w-full h-[80vh] flex justify-center">
      <div className="w-[75%] h-full flex">
        <div className="info-left w-1/2 h-[80%] px-[6vw] relative">
          <Video
            index={1}
            url={"/images/info1.webp"}
            image={true}
            para={
              "Why Refokus is the Best Partner to Build Your Venture Capital Website"
            }
          ></Video>
        </div>
        <div className="info-right w-1/2 h-full flex items-end pl-[6vw]">
          <div className="h-[38vh] w-full">
            <Video
              index={2}
              url={"/images/info2.png"}
              image={true}
              para={
                "Webflow Agency Case Study of Refokus as a leading Webflow Enterprise Partner"
              }
            ></Video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
