import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Btn from "../../components/Btn";
gsap.registerPlugin(ScrollTrigger);

function Welcome() {
  const gun: any = useRef(null);
  const shot: any = useRef(null);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "html",
          scrub: 0.2,
          start: "top top",
          end: "900vh",
        },
      })
      .to(gun.current, {
        rotation: 360,
        duration: 1,
        ease: "none",
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "html",
          scrub: 0.2,
          start: "top top",
          end: "900vh",
        },
      })
      .to(shot.current, {
        rotation: -360,
        duration: 1,
        ease: "none",
      });
  }, []);

  return (
    <section className="welcome" id="Home">
      <div className="welcome__top">
        <img className="welcome__blood" src="/images/blood.svg" alt="blood" />
        <img ref={gun} className="welcome__gun" src="/images/gun.png" alt="gun" />
        <div className="welcome__texts">
          <img ref={shot} className="welcome__shot" src="/images/shot.png" alt="shot" />
          <h1 className="welcome__title">COLLECT , DEFEND AND DOMINATE</h1>
          <span className="welcome__subtitle">
            WITH
            <span> NARCOSLAND</span>
          </span>
        </div>
        <div className="welcome__btns">
          <Btn title="View Gallery" />
          <Btn title="About Us" border />
        </div>
      </div>
      <div className="welcome__scroll">
        <div className="welcome__scroll-img">
          <div className="div"></div>
          <div className="div"></div>
          <div className="div"></div>
        </div>
        <span className="welcome__scroll-title">SCROLL DOWN</span>
      </div>
      <img className="welcome__pattern" src="/images/pattern.png" alt="pattern" />
    </section>
  );
}

export default Welcome;
