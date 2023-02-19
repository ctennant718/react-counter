import React, { useState } from "react";

function Counter() {
  const [value, setter] = useState(0);
  const buttonStyles = { marginInlineEnd: "0.5em" };
  return (
    <div>
      <h1>Counter</h1>
      <p>Press the buttons to add to or subtract from the value below.</p>
      <p>{value}</p>
      <button style={buttonStyles} onClick={() => setter(value + 1)}>
        +
      </button>
      <button style={buttonStyles} onClick={() => setter(value - 1)}>
        -
      </button>
    </div>
    //wire up the button event to the setter, and change the value each time it is pressed
  );
}

export default Counter;
