import { useEffect, useState } from "react";
import axios from "axios";
export default function CallingAxois() {
  //using axios to make API calling third way of API calling
  const [data, setData] = useState(null);
  const url = `https://jsonplaceholder.typicode.com/posts`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h1>Using Axios to make an API call in this component</h1>
    </>
  );
}
