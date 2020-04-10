import React from "react";
import HandMatrix from "../Components/HandMatrix";
import { pfIndexToPocket } from "../Components/handMappings";

const Cell = function({ value, index }) {
  const action = value.action;
  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        textAlign: "center",
        borderStyle: "solid",
        borderWidth: "1px",
        lineHeight: "40px"
      }}
    >
      {pfIndexToPocket[index]}
    </div>
  );
};

const RangeBuilder = props => {
  return (
    <div>
      <HandMatrix range={Object.keys(pfIndexToPocket)} Cell={Cell} />
    </div>
  );
};

export default RangeBuilder;
