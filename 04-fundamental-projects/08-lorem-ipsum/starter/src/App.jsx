import { useState } from 'react'
import  data  from './data'
import { nanoid } from 'nanoid'

const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])
  const handleChange = (e) => {
    setCount(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newData = data.slice(0, count)
    setText(newData)
  }

  return (
    <section className="section-center">
      <h4>TIRED OF BORING LOREM IPSUM?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="counter"></label>
        <input
          type="number"
          name="counter"
          id="counter"
          value={count}
          min={1}
          step={1}
          max={8}
          onInput={handleChange}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>
        })}
      </article>
    </section>
  )
}
export default App
