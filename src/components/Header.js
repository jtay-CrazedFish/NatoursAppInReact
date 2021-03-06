import React from "react";
import Button from "./Button";
import { whiteLogo } from "../img";

function Header() {
  return (
    <header class="header">
      <div class="header__logo-box">
        <img src={whiteLogo} alt="Logo" class="header__logo" />
      </div>

      <div class="header__text-box">
        <h1 class="primary-heading">
          <span class="primary-heading--main">Outdoors</span>
          <span class="primary-heading--sub">is where life happens</span>
        </h1>
        <Button
          href="#Tours"
          text="Discover our Tours"
          class="btn"
          color="white"
          animated={true}
        />
      </div>
    </header>
  );
}

export default Header;
