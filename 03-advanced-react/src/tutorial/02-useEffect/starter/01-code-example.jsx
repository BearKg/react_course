import { useState } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log('hello there');
  } 

  sayHello() // hàm sayHello sẽ được gọi lên bất cứ ki nào render lại

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
