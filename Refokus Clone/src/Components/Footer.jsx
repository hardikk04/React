import React from "react";

function Footer() {
  return (
    <div className="w-full flex justify-center py-[2vw]">
      <div className="w-[80%] flex justify-between">
        <div className="footer-left flex gap-14">
          {[
            "Privacy Policy",
            "Cookie Policy",
            "Impressum",
            "Terms",
            "Webflow Agency",
          ].map((item, index) => (
            <a className="text-zinc-400" key={index}>
              {item}
            </a>
          ))}
        </div>
        <img src="/images/footer.svg" alt="" />
      </div>
    </div>
  );
}

export default Footer;
