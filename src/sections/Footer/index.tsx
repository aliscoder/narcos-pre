import React from "react";
import { Logo } from "../../Icons";

export const FooterLinks = [
  { title: "Facebook", url: process.env.REACT_APP_FACEBOOK_URL as string },
  { title: "Twitter", url: process.env.REACT_APP_TWITTER_URL as string },
  { title: "Social", url: process.env.REACT_APP_SOCIAL_URL as string },
];
const Footer = () => {
  return (
    <section className="footer">
      <div className="footer_inner container">
        <div className="footer_inner_left">
          <Logo />
        </div>
        <p className="footer_inner_center">
          © 2022 NarcosLand. All rights reserved.
        </p>
        <div className="footer_inner_right">
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
      <p className="footer_center_mobile">
        © 2022 NarcosLand. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
