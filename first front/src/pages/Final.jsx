import React from "react";
import { useParams } from "react-router-dom";
import "./Final.css";

function Final() {
  const { selected, totalprice } = useParams();

  return (
    <div className="final">
      <div className="showe">
        <h3 className="select">SELECTED SEATS</h3>
        <div className="selected">{selected}</div>
        <h3>TOTALPRICE : ${totalprice}</h3>
      </div>
    </div>
  );
}

export { Final };
