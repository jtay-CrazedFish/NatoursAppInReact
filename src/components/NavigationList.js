import React from "react";
import { CommonLink, ImageLink } from "./Links";

function NavigationList(props) {
  return (
    <ul class={props.listClass}>
      {props.linkLabels.map(label => (
        <li class={props.itemClass}>
          {props.hasIcon ? (
            <ImageLink
              reference={label.ref ? label.ref : "#"}
              linkClass={props.linkClass}
              content={label.name}
              icon={props.icon}
              imageClass={props.imageClass}
            />
          ) : (
            <CommonLink
              reference={label.ref ? label.ref : "#"}
              linkClass={props.linkClass}
              content={label.name}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

export default NavigationList;
