import React, { useState } from 'react';

export default function Task3() {
//   let count = 0;
const [count ,setCounter] = useState(0);

  function handleClick() {
   setCounter(count + 1)
  }

  return (
    <div>
      <h3>Clicked {count} times</h3>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}