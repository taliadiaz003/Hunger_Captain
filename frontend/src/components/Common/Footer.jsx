import React from "react";
import logo from "../assets/img/Hunger-Captian.svg"

const Footer = ({ price, showCartList, setShowCartList }) => {
  return (
    <>
      <footer>
        <div class="subtotal">
          <span class="subtotal-test">Subtotal:</span>
          <span class="subtotal-price">${price}</span>
        </div>
        {showCartList ? (
          <button class="link-button " onClick={() => setShowCartList(false)}>
            GO BACK TO HOME
          </button>
        ) : (
          <button onClick={() => setShowCartList(true)}>
            CHECK CART
          </button>
        )}
      </footer>
      <section className="bottom-footer">
        <img src={logo} alt="logo" />
        <p>Premium Quality food at the best and most affordable price.</p>
        <p>We have a new offer every day for 365 days</p>
        <span className="contact">Contact</span> <br />
        <span className="email">
          E-mail : quickfood@Hungercaptain.com | Hotline: +1 131 138 138
        </span>
        <div className="copyright">
          <p>DESIGN BY HUNGER CAPTAIN - © 2022. ALL RIGHTS RESERVED.</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
