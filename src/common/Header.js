import React from "react";
export default function Header() {
  const homePage = () => {
    document.title = `Home Page`;
  };

  return (
    <>
      <header>
        <div>
          <h1
            className="header"
            style={{
              marginTop: 16,
              paddingVertical: 8,
              borderWidth: 4,
              borderColor: "#20232a",
              borderRadius: 6,
              backgroundColor: "#61dafb",
              color: "#20232a",
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold",
              container: {
                flex: 1,
                padding: 24,
                backgroundColor: "#eaeaea",
              },
            }}
          >
            {" "}
            Basics in React
          </h1>
          {homePage}
        </div>
      </header>
    </>
  );
}
