import { useState } from "react"

const ControlledInputs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email);
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Controlled Inputs</h2>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={name} // gán value nhận giá trị của name
            onChange={(e) => {
              setName(e.target.value) // value sẽ thay đổi khi ta nhập
            }}
          />
        </div>

        <div className="form-row">
          <label htmlFor="name" className="form-label">
            email
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>

        <button className="btn btn-block" type="submit">submit</button>
      </form>
    </div>
  )
}
export default ControlledInputs
