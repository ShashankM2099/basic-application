import { useState, useEffect } from "react";
function Color() {
  let [color, setColor] = useState("");
  useEffect(() => {
    document.getElementById("changeColor").style = color;
  });
  return (
    <>
      <h1 className="h1tag"> Click on the button to change colors!</h1>
      <p
        className="paraGraph"
        id="changeColor"
        style={{
          textAlign: "center",
        }}
      >
        My fav color is {color}
      </p>
      <div
        className="buttons-container"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          type="submit"
          onClick={() => setColor("blue")}
          style={{
            margin: "0 10px",
            backgroundColor: "blue",
            border: "none",
            borderRadius: "6px",
          }}
        >
          Blue
        </button>
        <button
          type="submit"
          onClick={() => setColor("green")}
          style={{
            margin: "0 10px",
            backgroundColor: "green",
            border: "none",
            borderRadius: "6px",
          }}
        >
          Green
        </button>
        <button
          type="submit"
          onClick={() => setColor("yellow")}
          style={{
            margin: "0 10px",
            backgroundColor: "yellow",
            border: "none",
            borderRadius: "6px",
          }}
        >
          Yellow
        </button>
        <button
          type="submit"
          onClick={() => setColor("violet")}
          style={{
            margin: "0 10px",
            backgroundColor: "violet",
            border: "none",
            borderRadius: "6px",
          }}
        >
          Violet
        </button>
      </div>
    </>
  );
}
export default Color;
