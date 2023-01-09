import React from "react";
import logo from "../assets/img/Hunger-Captian.svg"
import mainBackground from "../assets/img/main-background.png"

const Header = () => {
  return (
    <>
      <header>
        <img src={mainBackground} alt="main background" />
        
      </header>
      <section className="logo">
        <img src={logo} alt="Hunger Captain logo" />
      </section>
      <section className="text">
        <p>
        To eat is a necessity, <br /> <span>BUT TO EAT</span>  <br />
        intelligently is an art.
        </p>
      </section>
      </>
  );
};

export default Header;