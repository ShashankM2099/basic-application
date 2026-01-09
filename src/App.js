//importing header and footer
import Header from "./common/Header";
import { useEffect } from "react";
import Footer from "./common/Footer";
import { Link } from "react-router-dom";
import "./App.css"; // all CSS in this file
//importing RoutingCode
import RouterCode from "./components/RouterCode";
function App() {
  useEffect(() => {
    document.title = "React Application";
  }, []);
  return (
    <>
      {/* importing the header */}
      <Header />
      <>
        {/* NAVBAR */}
        <nav className="navbar">
          <Link to="/">Counter</Link> | <Link to="/form">Form</Link> |{" "}
          <Link to="/color">Color</Link> | <Link to="/api">Fetch API</Link> |{" "}
          <Link to="/axios">Axios</Link> | <Link to="/card">About US</Link>
        </nav>
        {/* importing Routing Codes */}
        <RouterCode />
      </>
      {/* importing the footer */}
      <Footer />
    </>
  );
}

export default App;
