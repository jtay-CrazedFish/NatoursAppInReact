import React from "react";
import classnames from "classnames";

function Button(props) {
  return (
    <a
      href={props.href ? props.href : "#"}
      className={classnames(
        props.class,
        `btn--${props.color}`,
        props.animated ? "btn--animated" : ""
      )}
    >
      {props.text}
    </a>
  );
}

export function NormalButton(props) {
  return (
    <button
      className={classnames(
        props.class,
        `btn--${props.color}`,
        props.animated ? "btn--animated" : ""
      )}
    >
      {props.text}
    </button>
  );
}

export default Button;
