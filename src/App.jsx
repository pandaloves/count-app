import CounterOne from "./components/CounterOne/CounterOne";
import CounterTwo from "./components/CounterTwo/CounterTwo";

function App() {
  return (
    <>
      <h1>Count App</h1>
      <div className="counter">
        <CounterOne />
      </div>
      <div className="counter">
        <CounterTwo />
      </div>
    </>
  );
}

export default App;
