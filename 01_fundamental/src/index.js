import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// - two flavors named and default exports

//   - with named exports names MUST match
//   - with default exports,can rename but only one per file
import {books} from './books' 
import Book from './Book'

function BookList() {
  const getBook = (id) => {
    const book = books.find(book => book.id === id)
    console.log(book)
  }

  return (
    <>
      <h2 className="page-title">Best Sellers in 2023</h2>
      <section className="booklist">
        {/* <EventExamples/> */}
        {books.map((book, index) => 
          <Book book={book} key={book.id} getBook={getBook} number={index}/>
        )}
      </section>
    </>
  )
}


// Event Object and Form Submission
function EventExamples() {
  const handleFormInput = () => {
    console.log('handle form input')
  }
  const handleButtonClick = () => {
    alert('handle button click')
  }
  const handleFormSubmission = (e) => {
    e.preventDefault()
    console.log('form submitted')
  }
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <input type="text" name="example" onChange={handleFormInput} />
        <button className="btn" onClick={handleButtonClick}>
          Click Me
        </button>
        <button className="submit-bt" type='submit'>Submit</button>
      </form>
    </section>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
