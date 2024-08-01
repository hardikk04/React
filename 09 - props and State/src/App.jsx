import React, { useState } from "react";
import Nav from "./Components/Nav";
import Card from "./Components/Card";

function App() {
  const raw = [
    {
      img: "https://images.unsplash.com/photo-1523205565295-f8e91625443b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBtZW58ZW58MHx8MHx8fDA%3D",
      artist: "Hardik",
      song: "Mockbird",
      cart: false,
    },
    {
      img: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsJTIwbWVufGVufDB8fDB8fHww",
      artist: "creativedotwe",
      song: "One Love",
      carts: false,
    },
    {
      img: "https://images.unsplash.com/photo-1599557527416-a50090d005b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsJTIwbWVufGVufDB8fDB8fHww",
      artist: "Prateek",
      song: "Paradise",
      cart: false,
    },
    {
      img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vZGVsJTIwbWVufGVufDB8fDB8fHww",
      artist: "Anuj",
      song: "Without me",
      cart: false,
    },
  ];

  const [data, setData] = useState(raw);

  const handleClick = (cardIndex) => {
    setData((prev) => {
      return prev.map((item, index) => {
        if (index === cardIndex) {
          return { ...item, cart: !item.cart };
        }
        return item;
      });
    });
  };

  return (
    <div className="w-full h-screen px-6 py-3 bg-zinc-200">
      <Nav data={data}></Nav>
      <div className="flex gap-5">
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              item={item}
              index={index}
              handleClick={handleClick}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}

export default App;
