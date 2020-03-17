import React from "react";
import classnames from "classnames";

function FeatureBox(props) {
  return (
    <div class="feature-box">
      <i className={classnames("feature-box__icon", props.icon)}></i>
      <h3 class="heading-tertiary u-margin-bottom-small">{props.header}</h3>
      <p class="feature-box__text">{props.text}</p>
    </div>
  );
}

export default FeatureBox;
