import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tableIndex } from "../redux/reducers/TableIndex";

function PrintTable() {
  const [enteredValue, setEnteredValue] = useState();
  const dispatch = useDispatch();
  // Get the table data from Redux store.
  const currTableState = useSelector((state) => state.tableIndexHere);
  const handleUpdateValue = (e) => {
    setEnteredValue(e.target.value);
    // send value to store
    dispatch(tableIndex(e.target.value));
    //if input doesn't have any value
    if (e.target.value === "") {
      dispatch(tableIndex(0));
    }
  };

  return (
    <div>
      <hr />
      <hr />
      <h3>
        Enter value:{" "}
        <input
          type="number"
          defaultValue={enteredValue}
          onChange={handleUpdateValue}
        />
      </h3>
      <h3>Table Will Display Here 👇</h3>
      Table of : {currTableState}
      <div>
        {currTableState} * {1} = {currTableState * 1}
        <br />
        {currTableState} * {2} = {currTableState * 2}
        <br />
        {currTableState} * {3} = {currTableState * 3}
        <br />
        {currTableState} * {4} = {currTableState * 4}
        <br />
        {currTableState} * {5} = {currTableState * 5}
        <br />
        {currTableState} * {6} = {currTableState * 6}
        <br />
        {currTableState} * {7} = {currTableState * 7}
        <br />
        {currTableState} * {8} = {currTableState * 8}
        <br />
        {currTableState} * {9} = {currTableState * 9}
        <br />
        {currTableState} * {10} = {currTableState * 10}
        <br />
      </div>
    </div>
  );
}

export default PrintTable;
