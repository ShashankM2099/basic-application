//importing header and footer
import Header from "./common/Header";
import { useEffect } from "react";
import Footer from "./common/Footer";
import { Link } from "react-router-dom";
//importing RoutingCode
import RouterCode from "./components/RouterCode";
function App() {
  function SetTitle() {
    useEffect(() => {
      document.title = "React Application";
    }, []);
  }
  return (
    <>
      <Header />
      {/* Calling the component using the import statement and calling it here */}
      <SetTitle />
      <>
        {/* importing Routing Codes */}
        <nav>
          <Link to="/">Counter</Link> | <Link to="/form">Form</Link> |{" "}
          <Link to="/color">Color</Link> | <Link to="/api">Fetch API</Link> |{" "}
          <Link to="/axios">Axios</Link>
        </nav>
        {/* <RouterCode /> */}
      </>
      <Footer />
    </>
  );
}

export default App;
