import React from "react";

import Card from "./components/card";
export default function CardContainer({ setState }) {
  return (
    <div id="card-holder">
      <Card setState={setState} />
    </div>
  );
}
