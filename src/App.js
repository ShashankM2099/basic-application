//imported the component
import Counter from "./components/Counter";
import Color from "./components/Color";
import CallingAPI from "./components/CallingAPI";
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
    </>
  );
}

export default App;
