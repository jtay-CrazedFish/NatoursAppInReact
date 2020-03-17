import React from "react";
import FeatureBox from "./FeatureBox";

const icons = {
  WORLD: "icon-basic-world",
  COMPASS: "icon-basic-compass",
  MAP: "icon-basic-map",
  HEART: "icon-basic-heart"
};

const headers = {
  WORLD: "Explore the World",
  COMPASS: "Meet Nature",
  MAP: "Find your Way",
  HEART: "live a healthier life"
};

const text = {
  WORLD:
    "Travel, travel, travel. That's what makes the world go round and round.",
  COMPASS:
    "Smell the trees and enjoy a nice time out with loved ones, and get away from the bustle of the city.",
  MAP: "We have the map! Dora can now find where she is supposed to go!",
  HEART: "Everything comes from the heart."
};

function Features(props) {
  return (
    <section class="section-features">
      <div class="row">
        <div class="col-1-of-4">
          <FeatureBox
            icon={icons.WORLD}
            header={headers.WORLD}
            text={text.WORLD}
          />
        </div>
        <div class="col-1-of-4">
          <FeatureBox
            icon={icons.COMPASS}
            header={headers.COMPASS}
            text={text.COMPASS}
          />
        </div>
        <div class="col-1-of-4">
          <FeatureBox icon={icons.MAP} header={headers.MAP} text={text.MAP} />
        </div>
        <div class="col-1-of-4">
          <FeatureBox
            icon={icons.HEART}
            header={headers.HEART}
            text={text.HEART}
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
