import React from "react";
import Button from "./Button";
import Heading2 from "./Heading2";
import { nat1large, nat2large, nat3large } from "../img";

function About() {
  return (
    <section class="section-about">
      <Heading2
        text="Exciting tours for adventurous people"
        size="big"
        center={true}
      />
      <div class="row">
        <div class="col-1-of-2">
          <h3 class="heading-tertiary u-margin-bottom-small">
            {" "}
            You're going to fall in love with me ;)
          </h3>
          <p class="paragraph">Random text.</p>
          <h3 class="heading-tertiary u-margin-bottom-small">
            {" "}
            Live adventurous like you never have before
          </h3>
          <p class="paragraph">Random other text.</p>
          <Button class="btn-text" text="Learn more &rarr;" />
        </div>
        <div class="col-1-of-2">
          <div class="composition">
            <img
              src={nat1large}
              alt="fig 1"
              class="composition__photo composition__photo--p1"
            />
            <img
              src={nat2large}
              alt="fig 2"
              class="composition__photo composition__photo--p2"
            />
            <img
              src={nat3large}
              alt="fig 3"
              class="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
