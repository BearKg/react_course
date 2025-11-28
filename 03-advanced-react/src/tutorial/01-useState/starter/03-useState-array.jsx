import {data} from '../../../data'
import React from 'react';



const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  const removePerson = (id) => {
    const newPeople = people.filter(person => person.id !== id)
    setPeople(newPeople)
  }

  return (
    <>
    {people.map(person => {
      return (
        <div key={person.id}>
          <h2>{person.name}</h2>
          <button className='btn' type='button' onClick={() => removePerson(person.id)}>remove</button>          
        </div>
       )
    })}
    <button style={{marginTop:'2rem'}} className='btn' type='button' onClick={() => setPeople([])}>Remove List</button>
    </>
  ) 
}

export default UseStateArray;
