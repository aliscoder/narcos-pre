import React from "react";
import CheckoutButton from "./CheckoutButton";

const WhitePaper = () => {
  return (
    <section className="whitepaper container" id="Wallet">
      <div className="whitepaper_blackbox">
        <span className="whitepaper_blackbox_title">OUR WHITEPAPER</span>
        <span className="whitepaper_blackbox_sub_title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </span>
        <CheckoutButton />
      </div>
      <div className="whitepaper_blood">
        <img src="/images/CheckBlood.svg" />
      </div>
    </section>
  );
};

export default WhitePaper;
