//imported the component
import Counter from "./components/Counter";
import Color from "./components/Color";
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
    </>
  );
}

export default App;
