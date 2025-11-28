

const ErrorExample = () => {
  let count = 0
  
  const handleNumber = () => {
    count++
    console.log(count); //Không hiển thị giá trị tật sự ra màn hình
  }
  return (
    <>
    <h2>{count}</h2>
    <button className='btn' type='button' onClick={handleNumber}>Increase</button>
    </>
  )
};

export default ErrorExample;
