import Stripe from "./Stripe";

function Strips() {
  const data = [
    { url: "/images/stripe1.svg", number: "2" },
    { url: "/images/stripe2.svg", number: "15" },
    { url: "/images/stripe3.svg", number: "52" },
    { url: "/images/stripe1.svg", number: "2" },
    { url: "/images/stripe2.svg", number: "15" },
    { url: "/images/stripe3.svg", number: "52" },
  ];
  return (
    <div className="flex  overflow-x-hidden w-full">
      <div className="marque w-full flex shrink-0">
        {data.map((item, index) => (
          <Stripe key={index} item={item} />
        ))}
      </div>
      <div className="marque w-full flex shrink-0">
        {data.map((item, index) => (
          <Stripe key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Strips;
