import React, { useState } from "react";
import Card from "./Components/Card";

function App() {
  const raw = [
    {
      img: "https://images.unsplash.com/photo-1523205565295-f8e91625443b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBtZW58ZW58MHx8MHx8fDA%3D",
      name: "Hardik",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere perferendis debitis molestias!",
      isFriends: false,
    },
    {
      img: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsJTIwbWVufGVufDB8fDB8fHww",
      name: "creativedotwe",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere perferendis debitis molestias!",
      isFriends: true,
    },
    {
      img: "https://images.unsplash.com/photo-1599557527416-a50090d005b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsJTIwbWVufGVufDB8fDB8fHww",
      name: "Prateek",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere perferendis debitis molestias!",
      isFriends: false,
    },
    {
      img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vZGVsJTIwbWVufGVufDB8fDB8fHww",
      name: "Anuj",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere perferendis debitis molestias!",
      isFriends: true,
    },
  ];

  const handleClick = (cardIndex) => {
    setData((prev) => {
      return prev.map((item, index) => {
        if (index === cardIndex) {
          return { ...item, isFriends: !item.isFriends };
        }
        return item;
      });
    });
  };

  const [data, setData] = useState(raw);

  return (
    <div className="bg-zinc-200 w-full h-screen flex justify-center items-center gap-5">
      {data.map((item, index) => {
        return (
          <Card
            key={index}
            index={index}
            item={item}
            handleClick={handleClick}
          ></Card>
        );
      })}
    </div>
  );
}

export default App;
