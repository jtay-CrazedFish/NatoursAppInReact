import React from "react";

function FooterNavigation(props) {
  return (
    <ul class={props.listClass}>
      {props.linkLabels.map(label => (
        <li class={props.itemClass}>
          <a href={label.ref ? label.ref : "#"} class={props.linkClass}>
            {label.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FooterNavigation;
