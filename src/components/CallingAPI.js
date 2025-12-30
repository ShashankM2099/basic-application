import { useState } from "react";
//using other way of calling an API
function CallingAPI() {
  // One of 3 ways to create an API call
  //1. XMLHttpRequest
  let [data, setData] = useState(null);
  let url = `https://fakerapi.it/api/v2/companies?_quantity=1`;
  const user = data?.data?.[0];
  function handleClick() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
      if (xhr.status === 200) {
        setData(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  }
  return (
    <>
      <h1>Calling an API using XMLHttpRequest Method</h1>
      <button onClick={handleClick}>Get Data</button>
      {data ? <>{JSON.stringify(data)}</> : <></>}
      <>
        {user ? (
          <>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>ID: {user.id}</p>
            <p>Phone: {user.phone}</p>
            <p>Country: {user.country}</p>

            <h3>Address</h3>
            <p>
              {user.addresses[0].street}, {user.addresses[0].city},{" "}
              {user.addresses[0].country}
            </p>

            <h3>Contact Person</h3>
            <p>
              {user.contact.firstname} {user.contact.lastname}
            </p>
            <p>Email: {user.contact.email}</p>
            <p>Gender: {user.contact.gender}</p>
          </>
        ) : (
          <>Loading...</>
        )}
      </>
    </>
  );
}
export default CallingAPI;
