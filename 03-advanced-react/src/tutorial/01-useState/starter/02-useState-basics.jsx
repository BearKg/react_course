import React from "react";

const UseStateBasics = () => {
  

  const [count, setCount] = React.useState(0) // Giúp render lại giá trị khi count thây đổi thông qua setCount
  const handleClick = () => {
    setCount(count+1)
  }
  
  return (
    <>
      <h2>{count}</h2>
      <button className="btn" type="button" onClick={handleClick}>Increase</button>
    </>
  ) 
};

export default UseStateBasics;
