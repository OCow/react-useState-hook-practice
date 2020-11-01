import React, { useState } from "react";

function App() {
  const [currentTimeString, btnSetTime] = useState(
    new Date().toLocaleTimeString()
  );

  function btnGetTime() {
    //console.log("Button pressed");
    btnSetTime(new Date().toLocaleTimeString());
  }

  // setInterval(() => {
  //   btnSetTime(new Date().toLocaleTimeString());
  // }, 1000);
  setInterval(btnGetTime, 1000);

  return (
    <div className="container">
      <h1>{currentTimeString}</h1>
      <button onClick={btnGetTime}>Get Time</button>
    </div>
  );
}

export default App;
