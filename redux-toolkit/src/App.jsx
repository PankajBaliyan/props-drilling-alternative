import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { Inc, Dec } from "./redux/reducers";

function App() {
  const currState = useSelector((state) => state.number);
  const dispatch = useDispatch();
  return (
    <>
      <h1>React redux tutorial</h1>
      <h2>{currState}</h2>
      <div>
      {/* use dispatch(Inc())  for default use not payload*/}
        <button
          style={{ border: "2px solid black" }}
          onClick={() => dispatch(Inc(10))}
        >
          Increment (+)
        </button>
        <button
          style={{ marginLeft: "10px", border: "2px solid black" }}
          onClick={() => dispatch(Dec(5))}
        >
          Decrement (-)
        </button>
      </div>
    </>
  );
}

export default App;
