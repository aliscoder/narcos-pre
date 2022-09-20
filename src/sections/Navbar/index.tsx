import React, { useEffect, useState } from "react";
import { Close, Logo } from "../../Icons";
import { FooterLinks } from "../Footer";
import NavLink from "./NavLink";

const navBarLinks = ["Home", "Gallery", "Mint", "About", "Wallet"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState("Home");
  const menuClass = menuOpen ? "_menu_active" : "_menu_inactive";
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = (name: string) => {
    setMenuOpen(false);
    document.removeEventListener("scroll", handleOnSroll);
    const section = document.getElementById(name);
    section?.scrollIntoView();
    setActiveIndex(name);
  };

  const handleOnSroll = () => {
    let section = document.querySelectorAll("section");

    section.forEach((sec) => {
      let TopOffset = window.scrollY;
      let sectionTopOffset = sec.offsetTop;
      let sectionHeight = sec.offsetHeight;
      let sectionID = sec.getAttribute("id");

      if (
        TopOffset >= sectionTopOffset - 200 &&
        TopOffset < sectionTopOffset + sectionHeight
      ) {
        const navLinkID = document
          .getElementById(`${sectionID}`)
          ?.getAttribute("id")!;
        setActiveIndex(navLinkID);
      }
    });
  };

  useEffect(() => {
    document.addEventListener("scroll", handleOnSroll);

    return () => {
      document.removeEventListener("scroll", handleOnSroll);
    };
  }, []);

  useEffect(() => {
    const { style } = document.querySelector("#body") as HTMLElement;
    style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const renderNavLinks = () => {
    return navBarLinks.map((link) => (
      <NavLink
        scrollToSection={handleScroll}
        isActive={link === activeIndex}
        key={link}
        title={link}
      />
    ));
  };

  return (
    <div className="navbar_container">
      <div className="navbar container">
        <div className="navbar_left">
          <Logo />
        </div>
        <div className="navbar_right">{renderNavLinks()}</div>
        <img onClick={toggleMenu} src="/images/Menu.svg" id="menuIcon" />

        {/* MOBILE VIEW */}
        <div className={`navbar_mobile navbar_mobile${menuClass}`}>
          <div className="navbar_mobile_container">
            <div className="navbar_mobile_close_icon" onClick={toggleMenu}>
              <Close />
            </div>
            <div className="navbar_mobile_items_container">
              {renderNavLinks()}
            </div>
            <div className="navbar_mobile_footer">
              {FooterLinks.map((link) => (
                <a key={link.title} href={link.url}>
                  <img
                    src={`/images/${link.title}.svg`}
                    width="24px"
                    height="24px"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* MOBILE VIEW */}
      </div>
    </div>
  );
};

export default Navbar;
