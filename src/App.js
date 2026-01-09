//importing header and footer
import Header from "./common/Header";
import { useEffect } from "react";
import Footer from "./common/Footer";
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
        hello
        {/* importing Routing Codes */}
        <RouterCode />
      </>
      {/* importing the footer */}
      <Footer />
    </>
  );
}

export default App;
