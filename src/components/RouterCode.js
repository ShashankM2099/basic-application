import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
//importing the necessary components to use the react-router
import Counter from "./Counter";
import Form from "./Form";
import Color from "./Color";
import CallingAPI from "./CallingAPI";
import CallingAxois from "./CallingAxois";

export default function RouterCode() {
  return (
    <div>
      <BrowserRouter>
        <nav className="routes-contanier" style={{ padding: "10px" }}>
          <Link to="/">Counter</Link> |<Link to="/form">Form</Link> |{" "}
          <Link to="/color">Color</Link> |<Link to="/api">Fetch API</Link> |{" "}
          <Link to="/axios">Axios</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/form" element={<Form />} />
          <Route path="/color" element={<Color />} />
          <Route path="/api" element={<CallingAPI />} />
          <Route path="/axios" element={<CallingAxois />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
