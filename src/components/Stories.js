import React from "react";
import Story from "./Story";
import Button from "./Button";
import { nat8, nat9 } from "../img/index";
import videoMp4 from "../img/video.mp4";
import videoWebm from "../img/video.webm";

function Stories() {
  return (
    <section class="section-stories">
      <div class="bg-video">
        <video class="bg-video__content" autoPlay muted loop>
          <source src={videoMp4} type="video/mp4" />
          <source src={videoWebm} type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
      <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">We make people genuinly happy</h2>
      </div>

      <div class="row">
        <Story
          name="Mary Smith"
          header="I had the best week ever with my family"
          image={nat8}
        />
      </div>

      <div class="row">
        <Story
          name="Jack Wilson"
          header="Wow! My life is completely different now"
          image={nat9}
        />
      </div>

      <div class="u-center-text u-margin-top-huge">
        <Button class="btn-text" text="Read all stories &rarr;" />
      </div>
    </section>
  );
}

export default Stories;
