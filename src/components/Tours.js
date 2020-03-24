import React from "react";
import TourCard from "./TourCard";
import Button from "./Button";
import Heading2 from "./Heading2";

const details = {
  ONE: [
    "3 Day Tours",
    "Up to 30 People",
    "2 Tour Guides",
    "Sleep in Cozy Hotels",
    "Difficulty: easy"
  ],
  TWO: [
    "7 Day Tours",
    "Up to 40 People",
    "6 Tour Guides",
    "Sleep in Provided Tents",
    "Difficulty: medium"
  ],
  THREE: [
    "5 Day Tours",
    "Up to 15 People",
    "3 Tour Guides",
    "Sleep in Provided Tents",
    "Difficulty: hard"
  ]
};

const headers = {
  ONE: "The Sea Explorer",
  TWO: "The Forest Hiker",
  THREE: "The Snow Adventurer"
};

const prices = {
  ONE: "$297",
  TWO: "$497",
  THREE: "$897"
};

function Tours() {
  return (
    <section class="section-tours" id="Tours">
      <Heading2 text="Most Popular Tours" size="big" center={true} />
      <div class="row">
        <div class="col-1-of-3">
          <TourCard
            cardNum={1}
            heading={headers.ONE}
            detail={details.ONE}
            price={prices.ONE}
          />
        </div>
        <div class="col-1-of-3">
          <TourCard
            cardNum={2}
            heading={headers.TWO}
            detail={details.TWO}
            price={prices.TWO}
          />
        </div>
        <div class="col-1-of-3">
          <TourCard
            cardNum={3}
            heading={headers.THREE}
            detail={details.THREE}
            price={prices.THREE}
          />
        </div>
      </div>
      <div class="u-center-text u-margin-top-huge">
        <Button text="Discover All Tours" class="btn" color="green" />
      </div>
    </section>
  );
}

export default Tours;
