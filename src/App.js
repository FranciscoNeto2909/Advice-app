import React from "react";
import { useSelector } from "react-redux/es/exports";

export default function App() {
  const advices = useSelector(data => data)
  console.log(advices)
  return (
    <div className="App">
      <h1 className="primary">teste</h1>
    </div>
  );
}

  