import React, { useState, useEffect } from "react";
function Counter() {
  //react counter component : functional component
  //hook and setting the default state to 0
  let [count, setCount] = useState(0);
  //function component should start with capital case, and you can pass props.method
  const FinalName = "Shashank";
  /**
   *
   * @param {userName} props takes in name
   * @returns returns the name passed
   */
  function SetName(props) {
    return (
      <div>
        <p className="paraGraph">
          This is {props.userName} written using props by passing the
          props.userName attribute
        </p>
      </div>
    );
  }
  //arrow function
  const countTracker = () => {
    //Got the paragraph and set it to a counter
    document.querySelector(
      ".countTrack"
    ).textContent = `You have clicked me ${count} timess...`;
    if (count === 5) {
      alert("Fast Five");
    }
  };
  const increaseCount = () => {
    return setCount(count + 1);
  };
  useEffect(() => {
    countTracker();
  });
  return (
    //Using a React.Fragment to get rid of <div> tags
    <>
      <h1>Counter Page</h1>
      {/* setting the userName to the props */}
      <SetName userName={FinalName} />
      <button
        variant="primary"
        type="submit"
        onClick={() => increaseCount()}
        style={{
          backgroundColor: "#28a745",
          color: "white",
          padding: "10px 16px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Click Me
      </button>
      <p className="countTrack"></p>
      <button
        type="reset"
        onClick={() => setCount(0)}
        style={{
          backgroundColor: "#dc3545",
          color: "white",
          padding: "10px 16px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Reset
      </button>
    </>
  );
}

export default Counter;
