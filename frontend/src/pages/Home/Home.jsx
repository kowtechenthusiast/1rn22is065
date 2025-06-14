import React, { useEffect, useState } from "react";
import "./home.css";
function Home() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/stocks", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Stocks fetched successfully:", data);

        setStocks(data);
      } catch (error) {
        console.error("Error fetching stocks:", error);
      }
    };

    fetchStocks();
  }, []);

  return (
    <div>
      <h1 className="title">Stocks Available</h1>
      <ul className="stock-list">
        {stocks.map((stock, index) => (
          <li className="stock-item" key={index}>
            {stock}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
