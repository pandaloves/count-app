import { useState } from "react";
import "./CounterOne.css";

const CounterOne = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="outer-container">
      <div className="inner-container">
        <div className="number">{count}</div>
        <div>
          <button className="btn" onClick={() => setCount(count + 1)}>
            &#x2B;
          </button>
          <button
            className="btn"
            onClick={() => {
              count >= 1 && setCount(count - 1);
            }}
          >
            &#x2D;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterOne;
