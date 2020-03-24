import React from "react";
import NavigationList from "./NavigationList";
import { navIcon } from "../img/index";

const linkLabels = [
  { ref: "#", name: "About Natours" },
  { ref: "#", name: "About Us" },
  { ref: "#", name: "Popular Tours" },
  { ref: "#", name: "Stories" },
  { ref: "#", name: "Book Now" }
];

function Navigation() {
  return (
    <div class="navigation">
      <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
      <label for="navi-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>
      <div class="navigation__background">&nbsp;</div>
      <nav class="navigation__nav">
        <NavigationList
          listClass="navigation__list"
          itemClass="navigation__item"
          linkClass="navigation__link"
          linkLabels={linkLabels}
          hasIcon={true}
          icon={navIcon}
          imageClass="navigation__bullet"
        />
      </nav>
    </div>
  );
}

export default Navigation;
