import { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState([])
  // Tránh cho việc fetch dữ liệu lặp lại mỗi khi render ta sử dụng userEffect
  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        setUsers(result)
      })
      .catch((err) => console.error(err))
  }, [])
  return (
    <section>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <img src={user.avatar_url} alt={user.login} />
              <div>
                <h5>{user.login}</h5>
                <a href={user.url}>profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
export default FetchData
