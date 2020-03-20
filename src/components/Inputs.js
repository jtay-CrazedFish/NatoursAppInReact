import React from "react";

export function TextInput({ type, id, placeholder }) {
  return (
    <>
      <input
        type={type}
        class="form__input"
        placeholder={placeholder}
        id={id}
        required
      />
      <label for={id} class="form__label">
        {placeholder}
      </label>
    </>
  );
}

export function RadioButton({ id, name, label }) {
  return (
    <>
      <input type="radio" class="form__radio-input" id={id} name={name} />
      <label for={id} class="form__radio-label">
        <span class="form__radio-button"></span>
        {label}
      </label>
    </>
  );
}
