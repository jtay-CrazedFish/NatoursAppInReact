import React from "react";
import Heading2 from "./Heading2";
import { NormalButton } from "./Button";
import { TextInput, RadioButton } from "./Inputs";

function BookingForm(props) {
  return (
    <form action={props.action ? props.action : "#"} class="form">
      <Heading2 text="Start Booking Now" size="medium" />

      <div class="form__group">
        <TextInput id="name" placeholder="Full Name" type="text" />
      </div>
      <div class="form__group">
        <TextInput id="email" type="email" placeholder="Email Address" />
      </div>

      <div class="form__group u-margin-bottom-medium">
        <div class="form__radio-group">
          <RadioButton id="small" name="size" label="Small Tour Group" />
        </div>
        <div class="form__radio-group">
          <RadioButton id="large" name="size" label="Large Tour Group" />
        </div>
      </div>
      <div class="form__group">
        <NormalButton class="btn" color="green" text="Next Step &rarr;" />
      </div>
    </form>
  );
}

export default BookingForm;
