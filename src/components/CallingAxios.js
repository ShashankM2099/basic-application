import { useEffect, useState } from "react";
import axios from "axios";
export default function CallingAxois() {
  //using axios to make API calling third way of API calling
  const [data, setData] = useState([]);
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
      {data.map((user) => (
        <div
          key={user.id}
          style={{
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <p>
            <strong>UserID:</strong> {user.userId}
          </p>
          <p>
            <strong>ID:</strong> {user.id}
          </p>
          <p>
            <strong>Title:</strong> {user.title}
          </p>
          <p>
            <strong>Body:</strong> {user.body}
          </p>
        </div>
      ))}
    </>
  );
}
