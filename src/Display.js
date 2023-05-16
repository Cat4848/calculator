export function Display({ operand1, operand2, operation, result }) {
  // console.log("display component -> operand-1", operand1);
  // console.log("display component -> operation", operation);
  // console.log("display component -> operand-2", operand2);
  return (
    <div className="display">
      <div>
        {operand1} {operation} {operand2}
      </div>
      <div className="result">
        {result}
      </div>
    </div>
  )
}