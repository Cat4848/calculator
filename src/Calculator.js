import { Button } from "./Button";
import { Display } from "./Display";
import { useState } from "react";

export function Calculator() {
  const [operand1, setOperand1] = useState(null);
  const [operand2, setOperand2] = useState(null);
  const [operation, setOperation] = useState(null);
  let [result, setResult] = useState(null);
  const buttons = [
    "AC",
    "/", 
    "*", 
    "-", 
    "+", 
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "=",
    "0"
  ];

  function handleClick(value) {
    // console.log("handle click function -> value", value);
    if (operand1 === null) {
      // console.log("operand 1");
      setOperand1(value);
    } else if (operation === null) {
      // console.log("operation");
      setOperation(value);
    } else if (operand2 === null) {
      // console.log("operand 2");
      setOperand2(value);
    }
  }

  function clearState() {
    setOperand1(null);
    setOperand2(null);
    setOperation(null);
    setResult(null);
  }

  function calculateResult() {
    switch (operation) {
      case "+": {
        result = parseFloat(operand1) + parseFloat(operand2);
        break;
      }
      case "-": {
        result = parseFloat(operand1) - parseFloat(operand2);
        break;
      }
      case "*": {
        result = parseFloat(operand1) * parseFloat(operand2);
        break;
      }
      case "/": {
        result = parseFloat(operand1) / parseFloat(operand2);
        break;
      }
      default: {
        throw Error("Not a valid operation.");
      }
    }
    setResult(result);
  }

  return (
    <>
      <Display 
        operand1={operand1}
        operand2={operand2}   
        operation={operation}
        result={result}
      />
      <div className="btn-row">
        <Button value={buttons[0]} btnClass={"op-btn"} onClick={clearState} />
      </div>
      <div className="btn-row">
        <Button value={buttons[1]} btnClass={"op-btn"} onClick={handleClick} />
        <Button value={buttons[2]} btnClass={"op-btn"} onClick={handleClick} />
        <Button value={buttons[3]} btnClass={"op-btn"} onClick={handleClick} />
        <Button value={buttons[4]} btnClass={"op-btn"} onClick={handleClick} />
      </div>
      <div className="btn-row">
        <Button value={buttons[5]} btnClass={"num-btn"} onClick={handleClick} />
        <Button value={buttons[6]} btnClass={"num-btn"} onClick={handleClick} />
        <Button value={buttons[7]} btnClass={"num-btn"} onClick={handleClick} />
        <Button value={buttons[8]} btnClass={"num-btn"} onClick={handleClick} />
        <div className="btn-row">
        <Button value={buttons[9]} btnClass={"num-btn"} onClick={handleClick} />
        <Button value={buttons[10]} btnClass={"num-btn"} onClick={handleClick} />
        <Button value={buttons[11]} btnClass={"num-btn"} onClick={handleClick} />
        <Button value={buttons[12]} btnClass={"num-btn"} onClick={handleClick} />
        </div>
      </div>
      <div className="btn-row">
        <Button value={buttons[13]} btnClass={"num-btn"} onClick={handleClick} />
        <Button value={buttons[16]} btnClass={"num-btn"} onClick={handleClick} />
        <Button value={buttons[14]} btnClass={"num-btn"} onClick={handleClick} />
        <Button value={buttons[15]} btnClass={"num-btn"} onClick={calculateResult} />
      </div>
    </>
  );

}
