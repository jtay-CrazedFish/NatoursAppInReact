import React from "react";
import NavigationList from "./NavigationList";
import { greenLogo, greenLogo2, smallGreenLogo, smallGreenLogo2 } from "../img";
import { CommonLink } from "./Links";

const linkLabels = [
  { ref: "#", name: "Company" },
  { ref: "#", name: "Contact Us" },
  { ref: "#", name: "Careers" },
  { ref: "#", name: "Privacy Policy" },
  { ref: "#", name: "Terms" },
];

function Footer() {
  return (
    <footer class="footer">
      <div class="footer__logo-box">
        <picture class="footer__logo">
          <source
            srcset={`${smallGreenLogo} 1x, ${smallGreenLogo2} 2x`}
            media="(max-width: 37.5rem)"
          />
          <img
            srcset={`${greenLogo} 1x, ${greenLogo2} 2x`}
            src={greenLogo2}
            alt="Full Logo"
          />
        </picture>
      </div>
      <div class="row">
        <div class="col-1-of-2">
          <div class="footer__navigation">
            <NavigationList
              listClass="footer__list"
              itemClass="footer__item"
              linkClass="footer__link"
              linkLabels={linkLabels}
            />
          </div>
        </div>
        <div class="col-1-of-2">
          <p class="footer__copywrite">
            Built by{" "}
            <CommonLink linkClass="footer__link" content="Jacob Taylor" /> using
            the online course by{" "}
            <CommonLink linkClass="footer__link" content="Jonas Schmedtmann" />.
            Learn more by taking his course{" "}
            <CommonLink
              linkClass="footer__link"
              content="Advanced css and sass"
            />
            . Copywrite &copy; by Jonas Schmedtmann.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
