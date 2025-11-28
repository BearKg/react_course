import { useState } from 'react'
import { data } from '../../../data'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [people, setPeople] = useState(data)
  const removeItems = (id) => {
    const filterPeople = people.filter((person) => person.id !== id)
    setPeople(filterPeople)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name) return
    const addPerson = [...people] // phải spread people vì nếu gán (= people) thì sẽ cùng tham chiếu vào một đối tượng mảng và chương trình sẽ ko thấy dc sự khac biệt giữa addPerson và People
    addPerson.push({ id: addPerson.length+1, name: name })
    setPeople(addPerson)
    setName('') // khi đã gán name rồi thì cần reset lại input value
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
            <button className="btn" onClick={() => removeItems(person.id)}>
              remove
            </button>
          </div>
        )
      })}
    </div>
  )
}
export default UserChallenge
