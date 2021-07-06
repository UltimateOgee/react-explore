import React, { useState, useEffect } from "react";

const fetchRandomUser = async (url) => {
  let randomData;
  await fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      randomData = JSON.stringify(data);
    })
    .catch((error) => console.log(error));
  return randomData;
};

function GetRequest() {
  const url = "https://randomuser.me/api";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchRandomUser(url).then((randomData) => {
      setData(randomData);
    });
  }, []);

  return <div>{data}</div>;
}

export default GetRequest;
