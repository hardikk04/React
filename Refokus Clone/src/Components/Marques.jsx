import Marque from "./Marque";

function Marquees() {
  const data = [
    "Webflow Development",
    "Creative Strattegy",
    "Web Design",
    "2D/3D Animations",
    "Creative Strattegy",
    "Web Design",
  ];
  return (
    <div className="flex  overflow-x-hidden w-full">
      <div className="m w-full flex shrink-0">
        {data.map((item, index) => (
          <Marque key={index} item={item} />
        ))}
      </div>
      <div className="m w-full flex shrink-0">
        {data.map((item, index) => (
          <Marque key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Marquees;
