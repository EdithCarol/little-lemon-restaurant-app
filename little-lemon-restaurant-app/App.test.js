import React, { useState, useCallback } from "react";

export default function App() {
  const [number, setNumber] = useState(1);

  const increment = useCallback(() => {
    setNumber((prevNumber) => prevNumber + 1);
  }, []);

  return (
    <React.Fragment>
      <h1 data-testid="currentNumber">{number}</h1>
      <button data-testid="add-one" onClick={increment}>
        Add one
      </button>
    </React.Fragment>
  );
}
