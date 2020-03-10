import React from "react";
import Header from "./Header";
import logo from "../logo.svg";

function App() {
  return (
    <>
      <Header></Header>
      <section class="grid-test">
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
    </>
  );
}

export default App;
