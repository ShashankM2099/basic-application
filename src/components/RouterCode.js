import { Route, Routes } from "react-router-dom";
//importing the necessary components to use the react-router
import Counter from "./Counter";
import Form from "./Form";
import Color from "./Color";
import CallingAPI from "./CallingAPI";
import CallingAxios from "./CallingAxios";
import CardStyle from "./CardStyle";

export default function RouterCode() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/form" element={<Form />} />
        <Route path="/color" element={<Color />} />
        <Route path="/api" element={<CallingAPI />} />
        <Route path="/axios" element={<CallingAxios />} />
        <Route path="/card" element={<CardStyle />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </>
  );
}
