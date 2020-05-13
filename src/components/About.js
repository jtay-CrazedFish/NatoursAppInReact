import React from "react";
import Button from "./Button";
import Heading2 from "./Heading2";
import { nat1large, nat1, nat2large, nat2, nat3large, nat3 } from "../img";

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
            You're going to love me
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
              srcset={`${nat1} 300w, ${nat1large} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="fig 1"
              class="composition__photo composition__photo--p1"
              src={nat1large}
            />

            <img
              srcset={`${nat2} 300w, ${nat2large} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="fig 2"
              class="composition__photo composition__photo--p2"
              src={nat1large}
            />

            <img
              srcset={`${nat3} 300w, ${nat3large} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="fig 3"
              class="composition__photo composition__photo--p3"
              src={nat1large}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
