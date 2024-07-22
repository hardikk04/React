import React from "react";

function Card() {
  const data = [
    {
      img: "https://i.pinimg.com/564x/d1/ea/9f/d1ea9fec16f56d07444dffbff2458a8c.jpg",
      name: "Hardik",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere in saepe reiciendis.",
    },
    {
      img: "https://i.pinimg.com/564x/7d/90/01/7d9001d37be6b827342ce8118f4a8d94.jpg",
      name: "creativedotwe",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere in saepe reiciendis.",
    },
    {
      img: "https://i.pinimg.com/564x/80/8b/89/808b8988cea2b9f221c3ad1ea0b67fa6.jpg",
      name: "Dojo Katana",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere in saepe reiciendis.",
    },
  ];

  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="card rounded-md w-[20vw] overflow-hidden bg-white">
            <div className="img bg-red-400 h-[35vh]">
              <img
                className="w-full h-full object-cover"
                src={item.img}
                alt=""
              />
            </div>
            <div className="content p-3 mt-2">
              <h1 className="text-3xl font-[500]">{item.name}</h1>
              <p className="mt-2">{item.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
