import Button from "./Button";
import Video from "./Video";

function Forward() {
  //www.refokus.com/news/refokus-offsite-recap-is-live
  https: return (
    <div className="w-full flex justify-center h-screen mt-[16vw]">
      <div className="w-[75%] h-full flex">
        <div className="forward-left w-1/2 h-full text-white">
          <h1 className="text-[9vw] font-semibold leading-none">Forward</h1>
          <div className="dets pl-[5.5vw] relative z-10">
            <h1 className="text-[9vw] font-semibold leading-none">Thinking</h1>
            <p className="text-xl w-2/3 my-10">
              Redefining the creative world with design, innovation, and
              forward-thinking as a leading Webflow Agency.
            </p>
            <Button title={"News & Insights"} bg={false}></Button>
          </div>
        </div>
        <div className="forward-right w-1/2 h-full overflow-hidden rounded-[1vw] ">
          <Video
            index={0}
            url={"/videos/forward.webm"}
            para={
              "Refokus 2022 Offsite: Where Work Meets Play, Innovation, and Homemade Pasta."
            }
          ></Video>
        </div>
      </div>
    </div>
  );
}

export default Forward;
