import Card from "./Card";

function Cards() {
  const data = [
    {
      intro: "Up Next: Projects",
      secondTitle: "Projects & Case Studies",
      para: "Web Design, Webflow Development, and Creative Development.",
      isButton: false,
      width: "30%",
    },
    {
      intro: "Up Next: Projects",
      title: "Start a Project",
      secondTitle: "Let's get to it together",
      isButton: true,
      button: "Contact us",
      width: "70%",
    },
  ];
  return (
    <div className="w-full justify-center flex">
      <div className="cards w-[80%] h-[50vh] flex gap-2">
        {data.map((item, index) => (
          <Card key={index} item={item}></Card>
        ))}
      </div>
    </div>
  );
}

export default Cards;
