import React, { useState } from "react";

function Clicker() {
  const [num, setNum] = useState(1);

  function handleClick() {
    let number = Math.floor(1 + Math.random() * 10) + 1;
    setNum(number);
  }

  let winner = num === 7;

  return (
    <div>
      Number is: {num}
      {winner ? (
        <h2>YOU WIN</h2>
      ) : (
        <button onClick={handleClick}>Generate Random Number</button>
      )}
    </div>
  );
}

export default Clicker;
