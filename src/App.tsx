import React, { useState, useCallback } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  const handleClick = useCallback(() => {
    setNum((prev) => prev + 1);
  }, [num]);

  return (
    <div>
      <h1>App Page</h1>
      <strong>{num}</strong>
      <button onClick={handleClick} style={{ textTransform: "uppercase" }}>
        increase
      </button>
    </div>
  );
};

export default App;
