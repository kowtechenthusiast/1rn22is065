import React, { useEffect, useState } from "react";

function Home() {
  const [stocks, setStocks] = useState({});

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const URL = "http://localhost:5000/api/stocks"; // Adjust the URL as needed
        const option = {
          method: "GET",
        };

        const response = await fetch(URL, option);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setStocks(data);
      } catch (error) {
        console.error("Error fetching stocks:", error);
      }
    };

    fetchStocks();
  }, []); // Only run once on mount

  return (
    <div>
      <h1>Stocks Available</h1>
      {Object.keys(stocks).length > 0 ? (
        <ul>
          {Object.entries(stocks).map(([name, symbol]) => (
            <li key={symbol}>
              {name}: ${symbol}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading stocks...</p>
      )}
    </div>
  );
}

export default Home;
