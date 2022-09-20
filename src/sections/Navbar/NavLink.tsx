import React, { FC } from "react";

interface Props {
  title: string;
  isActive: boolean;
  scrollToSection: (name: string) => void;
}

const NavLink: FC<Props> = ({ isActive, title, scrollToSection }) => {
  return (
    <div
      onClick={() => scrollToSection(title)}
      className={`link ${isActive && "link_active"}`}
    >
      <img src="/images/ArrowDown.svg" />
      <span className="link_title">{title}</span>
      <img src="/images/ArrowUp.svg" />
    </div>
  );
};

export default NavLink;
