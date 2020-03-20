import React from "react";
import BookingForm from "./BookingForm";

function Booking() {
  return (
    <section class="section-book">
      <div class="row">
        <div class="book">
          <div class="book__form">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;
