import { useState, useEffect } from "react";
function AnotherMethodApi() {
  let [data, setData] = useState([]);
  const url = `https://fakerapi.it/api/v2/users?_quantity=10`;
  // implementing useEffect method
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <h1>Using fetch method to print out the data in the API call</h1>
      {data?.map((user) => (
        <>
          <p>First Name: {user.firstname}</p>
          <p>Last Name: {user.lastname}</p>
          <p>User Name: {user.username}</p>
          <p>Password: {user.password}</p>
          <p>Email: {user.email}</p>
          <p>Mac Address: {user.macAddress}</p>
          <p>Website: {user.website}</p>
          <p>Image: {user.image}</p>
          <p></p>
          <p></p>
        </>
      ))}
    </>
  );
}
export default AnotherMethodApi;
