import React from "react";

function Story(props) {
  return (
    <div class="story">
      <figure class="story__shape">
        <img src={props.image} alt="Person on Tour" class="story__image" />
        <figcaption class="story__caption">{props.name}</figcaption>
      </figure>
      <div class="story__text">
        <h3 class="heading-tertiary u-margin-bottom-small">{props.header}</h3>
        <p>
          asdfkjhq qdfaljkb asdbfl if i dfalksdjv df ahfaj ljdknlkjhfal khdgia
          rj aj hlk fidsjfn efnabsidlvhichxuv aek nadiv knwow dfa the t ;j
          asdlfjhuao ae iuhgakf aroifghauihalskdfdxvc gja rf hsfghygk jdtfga
          dsgfadf fhgj dghk dyh srg adg vsfg nh m, rtyukr yuir yu ert aer
          t254yu57 iyt fgvb z dx ngn
        </p>
      </div>
    </div>
  );
}

export default Story;
