import React from "react";
import classnames from "classnames";

function Heading2(props) {
  return (
    <div
      className={classnames(
        props.center ? "u-center-text" : "",
        `u-margin-bottom-${props.size}`
      )}
    >
      <h2 class="heading-secondary">{props.text}</h2>
    </div>
  );
}

export default Heading2;
