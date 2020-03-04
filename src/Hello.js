import React from "react";
import ReactDOM from "react-dom";

function HeyHello() {
  const msg = () => {
    console.log("hello");
  };

  return (
    <div>
      <h2> Hello Adeel </h2>
      <button onClick={msg}> Hello </button>
    </div>
  );
}
export default HeyHello;
