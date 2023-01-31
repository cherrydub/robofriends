import React from "react";

export default function Scroll(props) {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "90vh",
      }}
    >
      {props.children}
    </div>
  );
}
