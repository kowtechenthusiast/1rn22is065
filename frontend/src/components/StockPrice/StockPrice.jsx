import React from "react";

function StockPrice() {
  const [minute, setMinute] = React.useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={minute}
          onChange={(e) => setMinute(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StockPrice;
