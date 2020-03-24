import React from "react";
import { nat8, nat9 } from "../img/index";
import Heading2 from "./Heading2";
import Button from "./Button";

function Popup() {
  return (
    <div class="popup" id="popup">
      <div class="popup__content">
        <div class="popup__left">
          <img src={nat8} alt="Tour" class="popup__img" />
          <img src={nat9} alt="Tour" class="popup__img" />
        </div>
        <div class="popup__right">
          <a href="#Tours" class="popup__close">
            &times;
          </a>
          <Heading2 size="small" text="Start Booking Now" />
          <h3 class="heading-tertiary u-margin-bottom-small">
            Important &ndash; Please read these terms before booking
          </h3>
          <p class="popup__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
            lobortis elementum nibh tellus molestie. Id aliquet risus feugiat in
            ante. Massa sed elementum tempus egestas sed sed risus pretium quam.
            Sit amet nisl suscipit adipiscing bibendum est ultricies integer
            quis. Pulvinar pellentesque habitant morbi tristique senectus et.
            Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna
            neque. Aliquam ultrices sagittis orci a. A lacus vestibulum sed arcu
            non odio euismod. Est pellentesque elit ullamcorper dignissim cras.
            Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. In
            est ante in nibh mauris cursus mattis molestie. Morbi non arcu risus
            quis varius.
          </p>
          <Button class="btn" color="green" text="Book Now" />
        </div>
      </div>
    </div>
  );
}

export default Popup;
