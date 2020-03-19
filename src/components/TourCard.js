import React from "react";
import classnames from "classnames";
import Button from "./Button";

function generateDetails(arg) {}

function TourCard(props) {
  return (
    <div class="tour-card">
      <div class="tour-card__side tour-card__side--front">
        <div
          className={classnames(
            "tour-card__picture",
            `tour-card__picture--${props.cardNum}`
          )}
        >
          &nbsp;
        </div>
        <h4 className={classnames("tour-card__heading")}>
          <span
            className={classnames(
              "tour-card__heading-span",
              `tour-card__heading-span--${props.cardNum}`
            )}
          >
            {props.heading}
          </span>
        </h4>
        <div class="tour-card__details">
          <ul>
            {Object.values(props.detail).map(function(value) {
              return <li class="stuff">{value}</li>;
            })}
          </ul>
        </div>
      </div>
      <div
        className={classnames(
          "tour-card__side",
          "tour-card__side--back",
          `tour-card__side--back-${props.cardNum}`
        )}
      >
        <div className="tour-card__cta">
          <div className="tour-card__price-box">
            <p className="tour-card__price-only">Only</p>
            <p className="tour-card__price-value">{props.price}</p>
          </div>
          <Button text="Book Now!" class="btn" color="white" animated={true} />
        </div>
      </div>
    </div>
  );
}

export default TourCard;
