import React from "react";
import classnames from "classnames";

function Button(props) {
  return (
    <a
      href="#"
      className={classnames("btn", `btn--${props.color}`, "btn--animated")}
    >
      Discover our Tours
    </a>
  );
}

export default Button;
