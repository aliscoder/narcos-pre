import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Btn from "./Btn";
import { useSwipeable } from "react-swipeable";

let timer: any = 7;
export default function Carousel() {
  useEffect(() => {
    let test = setInterval(timerHandle, 1000);
    return () => {
      clearInterval(test);
    };
  }, []);

  const timerHandle = () => {
    timer += 1;

    if (timer > 5) {
      next();
      timer = 0;
    }
  };

  const next = () => {
    let parent: any = document.querySelector(".carousel"),
      elements: any = document.querySelectorAll(".carousel__item"),
      active: any = null,
      newElement: any = null,
      lastElement: any = null,
      innerElement: any = null,
      rdyElement: any = null;
    elements.forEach((item: any, index: any) => {
      if (item.classList.contains("active")) {
        active = item;
        newElement =
          index === 0 ? elements[elements.length - 1] : elements[index - 1];
        lastElement =
          index === elements.length - 1 ? elements[0] : elements[index + 1];
        innerElement =
          index === 1
            ? elements[elements.length - 1]
            : index === 0
            ? elements[elements.length - 2]
            : elements[index - 2];
        rdyElement =
          index === 2
            ? elements[elements.length - 1]
            : (rdyElement =
                index === 1
                  ? elements[elements.length - 2]
                  : index === 0
                  ? elements[elements.length - 3]
                  : elements[index - 3]);
      }
    });
    gsap.to(active, {
      left: parent.offsetWidth - active.offsetWidth,
      scale: 0.8,
      opacity: 1,
      duration: 0.4,
      onComplete: () => {
        active.classList.remove("active");
      },
    });
    gsap.to(newElement, {
      left: parent.offsetWidth / 2 - newElement.offsetWidth / 2,
      scale: 1,
      duration: 0.4,
      onComplete: () => {
        newElement.classList.add("active");
      },
    });
    gsap.to(lastElement, {
      left: parent.offsetWidth / 1.5,
      scale: 0.4,
      opacity: 0,
      duration: 0.4,
    });
    gsap.to(rdyElement, {
      left: parent.offsetWidth / 3,
    });

    gsap.fromTo(
      innerElement,
      { opacity: 0, scale: 0.4, left: parent.offsetWidth / 3 },
      { opacity: 1, duration: 0.4, scale: 0.8, left: 0 }
    );
  };

  const prev = () => {
    let parent: any = document.querySelector(".carousel"),
      elements: any = document.querySelectorAll(".carousel__item"),
      active: any = null,
      newElement: any = null,
      lastElement: any = null,
      innerElement: any = null,
      rdyElement: any = null;
    elements.forEach((item: any, index: any) => {
      if (item.classList.contains("active")) {
        active = item;
        lastElement =
          index === 0 ? elements[elements.length - 1] : elements[index - 1];
        newElement =
          index === elements.length - 1 ? elements[0] : elements[index + 1];
        innerElement =
          index === elements.length - 1
            ? elements[1]
            : index === elements.length - 2
            ? elements[0]
            : elements[index + 2];
        rdyElement =
          innerElement === elements[elements.length - 1]
            ? elements[0]
            : innerElement === elements[elements.length - 2]
            ? elements[elements.length - 1]
            : innerElement === elements[0]
            ? elements[1]
            : innerElement === elements[1]
            ? elements[2]
            : elements[index + 3];
      }
    });
    gsap.to(active, {
      left: 0,
      scale: 0.8,
      opacity: 1,
      duration: 0.4,
      onComplete: () => {
        active.classList.remove("active");
      },
    });
    gsap.to(newElement, {
      left: parent.offsetWidth / 2 - newElement.offsetWidth / 2,
      scale: 1,
      duration: 0.4,
      onComplete: () => {
        newElement.classList.add("active");
      },
    });
    gsap.to(lastElement, {
      left: parent.offsetWidth / 3,
      scale: 0.4,
      opacity: 0,
      duration: 0.4,
    });
    gsap.to(rdyElement, {
      left: parent.offsetWidth / 1.5,
    });

    gsap.fromTo(
      innerElement,
      { opacity: 0, scale: 0.4, left: parent.offsetWidth / 1.5 },
      {
        opacity: 1,
        duration: 0.4,
        scale: 0.8,
        left: parent.offsetWidth - innerElement.offsetWidth,
      }
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      prev();
      timer = 0;
    },
    onSwipedRight: () =>{
      next();
      timer = 0;
    },
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <>
      <div className="carousel" {...handlers}>
        <img
          className="carousel__item active center"
          src="./images/char0.png"
          alt="character"
        />
        <img
          className="carousel__item comeRight"
          src="./images/char1.png"
          alt="character"
        />
        <img
          className="carousel__item"
          src="./images/char2.png"
          alt="character"
        />
        <img
          className="carousel__item"
          src="./images/char1.png"
          alt="character"
        />
        <img
          className="carousel__item comeLeft"
          src="./images/char2.png"
          alt="character"
        />
      </div>
    </>
  );
}
