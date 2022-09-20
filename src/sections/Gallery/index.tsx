import React from "react";
import Carousel from "../../components/Carousel";

export default function Characters() {
  return (
    <section className="characters" id="Gallery">
      <div className="characters__container">
        <div className="characters__container-text">
          <h2 className="characters__container-text--title">WHO ARE WE</h2>
          <p className="characters__container-text--subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis gravida scelerisque. Proin a erat eu magna
            commodo venenatis. Vestibulum euismod felis ac aliquam ultrices. Nulla nec interdum dui. Sed quis dolor tortor. In
            sagittis scelerisque justo. Integer venenatis gravida scelerisque. Proin a erat eu magna commodo venenatis. Vestibulum
            euismod felis ac aliquam ultrices. Nulla nec interdum dui. Sed quis dolor tortor. In sagittis scelerisque justo.
          </p>
        </div>
        <img src="/images/shot1.png" alt="left-shot" className="left-shot" />
        <img src="/images/blood1.png" alt="left-blood" className="left-blood" />
        <img src="/images/blood2.png" alt="right-blood" className="right-blood" />

        <div className="characters__container-slider">
          <Carousel />
          <div className="characters__pattern">
            <img className="characters__pattern-bg" src="./images/sliderPattern.png" alt="character" />
            <img className="characters__pattern-after" src="./images/carouselAfter.png" alt="after" />
          </div>
        </div>
      </div>
      {/* <img className="welcome__pattern" src="/images/pattern.png" alt="pattern" /> */}
    </section>
  );
}
