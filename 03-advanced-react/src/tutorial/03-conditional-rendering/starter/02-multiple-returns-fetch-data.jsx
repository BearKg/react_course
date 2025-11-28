import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(null)
  useEffect(() => { // ko thể đưa async function như là một argument vào userEffect. Nếu muốn có thể tạo một async funtion trong function dùng làm argument của useEffect
    fetch(url)
      .then((response) => {
        if (!response.ok) { // cần kiểm tra status vì fetch sẽ giải quyết Promise ngay cả khi mã trạng thái HTTP là lỗi 
          setIsError(true)
          setIsLoading(false)
          return
        }
        return response.json()
      })
      .then((result) => {
        setUser(result)
      })
      .then(() => {
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>There was an error...</h2>
  }

  const {avatar_url, name, company, bio} = user
  return (
    <div>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  )
}
export default MultipleReturnsFetchData

/**
 * Fetch trả về một Promise đã được giải quyết khi có một phản hồi từ máy chủ. Điều 
 * này có nghĩa rằng nó sẽ giải quyết Promise ngay cả khi mã trạng thái HTTP là lỗi, 
 * ví dụ: 404 (Not Found) hoặc 500 (Internal Server Error).
  Để kiểm tra xem yêu cầu Fetch có thành công hay không, bạn cần kiểm tra mã trạng thái HTTP 
  bằng cách sử dụng phương thức .status của đối tượng Response.
 */