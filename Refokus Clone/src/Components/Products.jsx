import Product from "./Product";
import Button from "./Button";

function Products() {
  const data = [
    {
      title: "arqitel",
      image1: "/images/a1.webp",
      image2: "/images/a2.webp",
      video: "/videos/a.webm",
      rightP1: "Concept, Design, 3D, Webflow+WebGL Development",
      rightP2:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      bgColor: "#5355EE",
    },
    {
      title: "cula",
      image1: "/images/c1.png",
      image2: "/images/c2.png",
      video: "/videos/c.mp4",
      rightP1: "Concept, Design, 3D, Webflow+WebGL Development",
      rightP2:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      bgColor: "#4A576B",
    },
    {
      title: "webflow",
      image1: "/images/w1.webp",
      image2: "/images/w2.webp",
      video: "/videos/w.mp4",
      rightP1: "Concept, Design, Webflow Development",
      rightP2:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      bgColor: "#1626F3",
    },
    {
      title: "refokus",
      image1: "/images/r1.jpg",
      image2: "/images/r2.jpg",
      video: "/videos/r.webm",
      rightP1:
        "Concept, Design, 3D, Webflow+WebGL Development, AI Integrations",
      rightP2:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      bgColor: "#3E4365",
    },
    {
      title: "mav/v",
      image1: "/images/m1.png",
      image2: "/images/m2.png",
      video: "/videos/m.mp4",
      rightP1: "Branding, Design, Webflow+GSAP Development",
      rightP2:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      bgColor: "#2DCB76",
    },
  ];
  return (
    <div className="w-full pt-[6vw]">
      <div className="w-[75%] mx-auto flex flex-col items-center">
        {data.map((item, index) => (
          <Product key={index} item={item} index={index}></Product>
        ))}
        <div className="flex justify-center">
          <Button title={"View More Work"} bg={false}></Button>
        </div>
      </div>
    </div>
  );
}

export default Products;
