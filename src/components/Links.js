import React from "react";

export function CommonLink({ linkClass, reference, content }) {
  return (
    <a href={reference ? reference : "#"} class={linkClass}>
      {content}
    </a>
  );
}

export function ImageLink({ linkClass, reference, content, icon, imageClass }) {
  return (
    <a href={reference ? reference : "#"} class={linkClass}>
      <img src={icon} alt="&rarr;" class={imageClass} />
      {content}
    </a>
  );
}
