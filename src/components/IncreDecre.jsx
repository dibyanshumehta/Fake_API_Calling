import React, { useState } from "react";

function IncreDecre() {
  const [value, setValue] = useState(0);
  const handleIncrement = () => {
    setValue(value + 1);
  };
  const handleDecrement = () => {
    if (value === 0) {
      alert("Number can't be less then zero");
    } else {
      setValue(value - 1);
    }
  };
  return (
    <>
      <button className="btn btn-success" onClick={handleIncrement}>
        Increment
      </button>
      <h1>{value}</h1>
      <button className="btn btn-danger" onClick={handleDecrement}>
        Decrement
      </button>
    </>
  );
}

export default IncreDecre;
