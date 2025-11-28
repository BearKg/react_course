import { useState } from "react";

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: '',
    email: '', 
    password: ''
  })
  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
    // Lấy ra name của input tương úng với name trong object user và gán giá trị của value trong input
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user);
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' name='name' id='name' onChange={handleChange}/>
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' name='email' id='email' onChange={handleChange}/>
        </div>
        {/* password */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type='password' className='form-input' name='password' id='password' onChange={handleChange}/>
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
