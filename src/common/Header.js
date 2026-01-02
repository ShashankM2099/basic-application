import React from "react";

export default function Header() {
  const homePage = () => {
    document.title = `Home Page`;
  };

  return (
    <>
      <header>
        <div>
          <h1> React Administration</h1>
          {homePage}
        </div>
      </header>
    </>
  );
}
