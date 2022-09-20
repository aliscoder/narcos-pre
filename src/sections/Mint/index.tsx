import React, { useState } from "react";
import Btn from "../../components/Btn";
import { Arrow } from "../../../public/images/arrow";
import Three from "./Three/Three";
const data = [
  {
    name: "Pablo Scobar",
    sale: "MAIN SALE",
    count: 1,
  },
  {
    name: "Steve",
    sale: "MAIN SALE",
    count: 2,
  },
  {
    name: "Jav",
    sale: "MAIN SALE",
    count: 3,
  },
  {
    name: "Elchapo",
    sale: "MAIN SALE",
    count: 4,
  },
];
const Mint = () => {
  const [count, setCount] = useState(1);
  const [sliderCount, setSliderCount] = useState(0);

  function leftPad(number: number, targetLength: number) {
    var output = number + "";
    while (output.length < targetLength) {
      output = "0" + output;
    }
    return output;
  }
  return (
    <section className="mint" id="Mint">
      <div className="mint__container">
        <div className="mint__left-column">
          <h2>MINT</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis gravida scelerisque. Proin a erat eu magna
            commodo venenatis.
          </p>
          <div className="slider-responsive">
            <div className="slider">
              <div
                  className="slider__arrow "
                  onClick={() =>
                      sliderCount > 0
                          ? sliderCount === data.length
                              ? (setSliderCount(0))
                              : setSliderCount(sliderCount - 1)
                          : setSliderCount(data.length - 1)
                  }
              >
                <Arrow className="arrow" style={{ stroke: "#0A0908" }} />
              </div>
              {data.map((item, inx) => {
                // setCount(item?.count);
                return (
                    <div key={inx} className="slider-content" style={{ display: inx === sliderCount ? "flex" : "none" }}>
                      <div>
                        <div className="name">{item.name}</div>
                        <div className="sale">{item.sale}</div>
                      </div>

                      <div className="range">
                        <span>{item?.count}</span>/ 500
                      </div>
                    </div>
                );
              })}
              <div
                  className="slider__arrow"
                  onClick={() =>
                      sliderCount > 0
                          ? sliderCount === data?.length - 1
                              ? setSliderCount(0)
                              : setSliderCount(sliderCount + 1)
                          : setSliderCount(sliderCount + 1)
                  }
              >
                <Arrow style={{ stroke: "#0A0908" }} />
              </div>
            </div>

            <div className="mint__left-column__actions">
              <div className="counter">
                <div className="counter__arrow" onClick={() => count > 0 && setCount(count - 1)}>
                  <Arrow className="arrow" style={{ stroke: "#FEE3C3" }} />
                </div>
                {leftPad(data[sliderCount].count, 2)}

                <div className="counter__arrow  slider__arrow-desktop" onClick={() => setCount(count + 1)}>
                  <Arrow style={{ stroke: "#FEE3C3" }} />
                </div>
              </div>
              <Btn title="MINT" border />
            </div>
          </div>
        </div>
        <div className="img-container">
          <Three count={sliderCount} />
        </div>

        </div>
        <div className="mint__left-column" style={{ marginTop: "-62px" }}>
          <div className="slider-mobile">
            <div className="slider">
              <div className="slider__arrows">
                <div
                    className="slider__arrow "
                    onClick={() =>
                        sliderCount > 0
                            ? sliderCount === data.length
                                ? setSliderCount(0)
                                : setSliderCount(sliderCount - 1)
                            : setSliderCount(data.length - 1)
                    }
                >
                  <Arrow className="arrow" style={{ stroke: "#0A0908" }} />
                </div>
                <div
                    className="slider__arrow"
                    onClick={() =>
                        sliderCount > 0
                            ? sliderCount === data?.length - 1
                                ? setSliderCount(0)
                                : setSliderCount(sliderCount + 1)
                            : setSliderCount(sliderCount + 1)
                    }
                >
                  <Arrow style={{ stroke: "#0A0908" }} />
                </div>
              </div>

              {data.map((item, inx) => {
                return (
                    <div key={inx} className="slider-content" style={{ display: inx === sliderCount ? "flex" : "none" }}>
                      <div>
                        <div className="name">{item.name}</div>
                        <div className="sale">{item.sale}</div>
                      </div>

                      <div className="range">
                        <span>{item?.count}</span>/ 500
                      </div>
                    </div>
                );
              })}
            </div>
            <div className="mint__left-column__actions">
              <div className="counter">
                <div className="counter__arrow" onClick={() => count > 0 && setCount(count - 1)}>
                  <Arrow className="arrow" style={{ stroke: "#FEE3C3" }} />
                </div>
                {leftPad(data[sliderCount].count, 2)}
                <div className="counter__arrow  slider__arrow-desktop" onClick={() => setCount(count + 1)}>
                  <Arrow style={{ stroke: "#FEE3C3" }} />
                </div>
              </div>
              <Btn title="MINT" border />
            </div>
          </div> </div>

    </section>
  );
};

export default Mint;
