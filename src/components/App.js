import React, { Fragment } from "react";
import Header from "./Header";
import About from "./About";
import Features from "./Features";
import Tours from "./Tours";
import Stories from "./Stories";
import Booking from "./Booking";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Popup from "./Popup";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Booking />
      </main>
      <Footer />
      <Popup />

      {/* <section class="grid-test">
        <div class="row">
          <div class="col-1-of-2">col 1 of 2</div>
          <div class="col-1-of-2">col 1 of 2</div>
        </div>
        <div class="row">
          <div class="col-1-of-3">col 1 of 3</div>
          <div class="col-1-of-3">col 1 of 3</div>
          <div class="col-1-of-3">col 1 of 3</div>
        </div>
        <div class="row">
          <div class="col-1-of-3">col 1 of 3</div>
          <div class="col-2-of-3">col 2 of 3</div>
        </div>
        <div class="row">
          <div class="col-1-of-4">col 1 of 4</div>
          <div class="col-1-of-4">col 1 of 4</div>
          <div class="col-1-of-4">col 1 of 4</div>
          <div class="col-1-of-4">col 1 of 4</div>
        </div>
        <div class="row">
          <div class="col-1-of-4">col 1 of 4</div>
          <div class="col-1-of-4">col 1 of 4</div>
          <div class="col-2-of-4">col 2 of 4</div>
        </div>
        <div class="row">
          <div class="col-1-of-4">col 1 of 4</div>
          <div class="col-3-of-4">col 3 of 4</div>
        </div>
      </section>
       */}
    </Fragment>
  );
}

export default App;
