import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { Inc, Dec } from "./redux/reducers/index";
import { FormIndex } from "./redux/reducers/FormIndex";
import { useState, useEffect } from "react";
import PrintTable from "./components/PrintTable";

function App() {
  const currState = useSelector((state) => state.number);
  const currFormState = useSelector((state) => state.formIndexHere);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const updateName = (e) => {
    setName(e.target.value);
  };
  const dispatchName = () => {
    dispatch(FormIndex(name));
  };
  useEffect(() => {
    dispatchName();
  }, [name]);

  return (
    <>
      <h1>React with Redux</h1>
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
      <hr />
      <hr />

      <input
        type="text"
        placeholder="Write text here"
        value={name}
        onChange={updateName}
      />
      <button
        style={{ marginLeft: "10px", border: "2px solid black" }}
        onClick={() => dispatch(FormIndex(name))}
      >
        Update Name
      </button>
      <p>{currFormState}</p>
      <PrintTable/>
    </>
  );
}

export default App;
