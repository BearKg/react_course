function Book({ book: { img, title, author, id }, getBook, number }) {
  return (
    <article className="book">
      <div className="number">
        <p>{`#${++number}`}</p>
      </div>
      <img src={img} alt={title} />
      <div>
        <h2>{title}</h2>
      </div>
      {/* có thể áp dụng để tạo remove btn */}
      {/* <button style={{width:'5rem', height:'2rem'}} onClick={() => console.log(title)}>Click me</button> */}
      {/* có thể dùng để tìm và xóa đối tượng */}
      {/* <button onClick={() => getBook(id)}>Click Me</button> */}
      <h4>{author}</h4>
    </article>
  )
}

export default Book
