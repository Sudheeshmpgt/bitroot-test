import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import '../styles/home.css'

function Home() {
  const [cardData, setCardData] = useState([]);

  const getData = async () => {
    try {
      const result = await axios.get(
        "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
      );
      setCardData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className= "container">
      <div className="grid">
        {cardData.map((data, index) => (
          <Card key={index} value={data} />
        ))}
      </div>
    </div>
  );
}

export default Home;
