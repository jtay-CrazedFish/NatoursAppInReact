import React from "react";
import CommonLink from "./CommonLink";

function FooterNavigation(props) {
  return (
    <ul class={props.listClass}>
      {props.linkLabels.map(label => (
        <li class={props.itemClass}>
          <CommonLink
            reference={label.ref ? label.ref : "#"}
            linkClass={props.linkClass}
            content={label.name}
          />
        </li>
      ))}
    </ul>
  );
}

export default FooterNavigation;
