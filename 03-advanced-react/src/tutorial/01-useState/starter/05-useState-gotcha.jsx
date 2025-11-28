import React from "react";
const UseStateGotcha = () => {
  
  const [value, setValue] = React.useState(0)

const increaseValue =  () => {
  setTimeout(() => {
    setValue(value + 1)// TH1
    // If you want to update the state immediately and synchronously, you can pass a function to setState that receives the previous state as an argument and returns the new state. For example:
    setValue(currentState => { //TH2
      return currentState + 1
    }) // Việc đưa function vào setValue giúp cho việc cập nhật giá trị của value được đồng bộ.
    // TH2: Nếu click button nhiều lần cùng lúc thì sau 3s value sẽ đưuọc cập nhật bấy nhiêu lần
    // TH1: Ngược lại nếu ko đưa function vào setValue thì sau 3s value chỉ được cập nhật 1 lần dù có click button bao nhiêu lần
    console.log('Click Button');
  },3000)
}


  return <>
    <h2>{value}</h2>
    <button className="btn" onClick={increaseValue}>Increase</button>
  </>;
};

export default UseStateGotcha;

// Keep in mind that the state update function setState does not immediately mutate the state. Instead, it schedules an update to the state and tells React that it needs to re-render the component. The actual state update will be performed as part of the next rendering cycle. Be mindful when you need to set state value based on a different state value.
