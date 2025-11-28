import { useState } from 'react'

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget) // formData là form hiện tại submit
    console.log(formData)
    console.log([...formData.entries()]) // entries() chuyển array hay object thành iterator
    //  iterator (trình duyệt) chứa cặp key-value từ các thuộc tính của đối tượng. Nó cho phép bạn duyệt qua các cặp key-value trong đối tượng và thực hiện các thao tác xử lý trên chúng.
    console.log(formData);
    const newUser = Object.fromEntries(formData.entries()) // fromEntries() chuyển iterator thành object
    
    console.log(newUser)
    setValue(value + 1)
    e.currentTarget.reset()
    // ko phải lúc nào cũng controlled input nếu chỉ cần xuất data thì chuyển data về dạng object gồm key-value là được
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="name" name="name" />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-input" id="email" name="email" />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  )
}
export default UncontrolledInputs
