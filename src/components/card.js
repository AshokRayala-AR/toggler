import React from "react";
// import Close from "./close.png";

export default function Card({ setState }) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div id="card-container">
      <form action="" onSubmit={handleSubmit} id="form">
        <div id="card-header">
          <h1 id="card-title">Contact Us</h1>
          <img
            onClick={() => {
              setState((prevState) => !prevState);
            }}
            src="/close.png"
            alt="close"
            id="card-close"
          />
        </div>
        <div id="input-div">
          <label htmlFor="userName">UserName</label>
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="userName"
          />
        </div>
        <div id="input-div">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@gamil.com"
          />
        </div>
        <div id="input-div">
          <label htmlFor="number">Mobile Number</label>
          <input
            type="number"
            id="number"
            name="number"
            placeholder="10 digit Number"
          />
        </div>
        <div id="input-div">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <button
          onClick={() => {
            setState((prevState) => !prevState);
          }}
        >
          ContactUs
        </button>
      </form>
    </div>
  );
}
