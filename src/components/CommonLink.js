import React from "react";

function CommonLink({ linkClass, reference, content }) {
  return (
    <a href={reference ? reference : "#"} class={linkClass}>
      {content}
    </a>
  );
}

export default CommonLink;
