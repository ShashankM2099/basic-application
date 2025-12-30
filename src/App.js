//imported the component
import Counter from "./components/Counter";
import Color from "./components/Color";
import CallingAPI from "./components/CallingAPI";
import AnotherMethodApi from "./components/AnotherMethodApi";
import { useEffect } from "react";
function App() {
  function SetTitle() {
    useEffect(() => {
      document.title = "React Application";
    }, []);
  }
  return (
    <>
      {/* Calling the component using the import statement and calling it here */}
      <SetTitle />
      <Counter />
      <Color />
      {/* Importing callingAPI component here */}
      <CallingAPI />
      {/* Another method of calling API */}
      <AnotherMethodApi />
    </>
  );
}

export default App;
