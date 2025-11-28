import { useEffect, useState } from 'react'

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  )
}

const RandomComponent = () => {
  useEffect(() => {
    const intervalFunc = setInterval(() => {
      console.log('hello from interval')
    }, 1000)
    return () => {
      clearInterval(intervalFunc) // cleanup fuction
    }
  }, [])
  // Nếu không dùng cleanup fuction thì khi RandomComponent bị loại bỏ intervalFunc vẫn chưa bị loại bỏ và vẫn tiếp tục hoạt động
  return (
    <div>
      <h3>hello there</h3>
    </div>
  )
}

export default CleanupFunction

/**
 * Trong React, khi bạn sử dụng useEffect, bạn có thể đặt một hàm gọi là "cleanup function" 
 * (hoặc "clean-up effect") trong callback của useEffect. Cleanup function được gọi khi 
 * component bị unmount hoặc khi dependencies của useEffect thay đổi và component bị render 
 * lại. Cleanup function thường được sử dụng để dọn dẹp tài nguyên hoặc hủy các tác vụ không 
 * cần thiết trước khi component bị loại bỏ hoặc khi các điều kiện thay đổi.


Ở đây đang sử dụng useEffect trong RandomComponent mà không có dependencies (mảng trống
  []), điều này đồng nghĩa với việc useEffect sẽ chỉ chạy một lần sau khi component được 
  mount. Khi component được unmount hoặc khi RandomComponent bị thay đổi và render lại, 
  React sẽ gọi cleanup function mà bạn đã định nghĩa.

Trong ví dụ trên, cleanup function chỉ đơn giản là viết ra một thông báo console để thể 
hiện rằng nó đang được gọi. Trong thực tế, cleanup function có thể được sử dụng để hủy các 
đăng ký sự kiện, hủy các request mạng không hoàn thành, hoặc dọn dẹp bất kỳ tài nguyên nào 
mà component đã sử dụng trong quá trình thực thi của useEffect.
 */
