import React from "react";

export default function NavBar({ setState }) {
  return (
    <div id="navbar">
      <button
        onClick={() => {
          setState((prevState) => !prevState);
        }}
        id="toggler"
      >
        Toggle
      </button>
    </div>
  );
}
