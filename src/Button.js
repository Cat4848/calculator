import { useRef } from "react";

export function Button({value, btnClass, onClick}) {
  const buttonValue = useRef(value);
  return (
    <button 
      className={`btn ${btnClass}`} 
      onClick={() => onClick(buttonValue.current)} 
    >{value}
    </button>
  )
}