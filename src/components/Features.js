import React from "react";
import classnames from "classnames";
import FeatureBox from "./FeatureBox";

function Features(props) {
  return (
    <section class="section-features">
      <div class="row">
        <div clas="col-1-of-4">
          <FeatureBox />
        </div>
      </div>
    </section>
  );
}

export default Features;
