### Reactjs Interview

## Beginners Level

### <u>Tổng quan</u>

ReactJS là thư viện JavaScript xây dựng dựa trên component(component-based) được sử dụng để xây dựng giao diện có tính linh hoạt và tương tác. Giúp đơn giản hóa qua trình tạo single-page app (SPAs) bằng cách tập trung vào hiệu suất và khả năng bảo trì.

Các khía cạnh của React:

- Tái sử dụng Component: Giúp phát triển nhanh chóng nhờ tái sử dụng code.
- Giao diện khai báo (Declarative UI): Giúp mô tả giao diện dựa trên trạng thái hiện tại (current state) một cách dễ dàng hơn.
- Hỗ trợ đa nền tảng (Cross-Platform Support): Cung cấp sức mạnh cho cả ứng dụng web (React.js) và ứng dụng di động (React Native).

### <u>ReactJS hoạt động như thế nào?</u>

![react](https://media.geeksforgeeks.org/wp-content/uploads/20250919113552560439/working_of_react-.webp)

- Hoạt động theo kiến trúc component-based và sử dụng DOM ảo để cập nhật và render giao diện người dùng một cách hiệu quả.
- Component: UI được phân tách thành các phần độc lập và có thể tái sử dụng.
- Virtual DOM: Bản sao ảo và nhẹ hơn của DOM có thể theo dõi thay đổi của giao diện.
- JSX: Cho phép viết mã HTML bên trong JS giúp quá trình phát triển dễ dàng hơn.
- Sự đối chiếu (Reconcilation): Nhận biết sự thay đổi của DOM ảo và chỉ cập nhật riêng những phần biến đổi trên DOM thật.
- One-way data flow: Đảm bảo cập nhật giao diện một cách có tổ chức thông qua truyền dữ liệu từ component cha sang component con thông quá props.
- Quản lý state: React tự động re-render component khi state thay đổi.

### <u>JSX là gì và cách để nó convert thành JS</u>

- JSX là cú pháp mở rộng cho JS, thường được sử dụng bởi React.
- HTML trong JS: cho phép viết HTML bên trong JavaScript giúp dễ đọc và dễ bảo trì.
- Expression: Có thể nhúng JS trong JSX bằng {};

### <u>Component là gì?</u>

Component là thành phần cốt lõi của React. Nói cách khác các ứng dụng React được xây dừng từ những phần nhỏ gọi là component. Nó giúp việc xây dựng UI dễ dàng hơn.
Trong React có 2 loại component:

- Functional Component: Là các JS function đơn giản. Ban đầu bị giới hạn về quản lý state và lifecycle. Nhưng sự ra đời của hook đã giải quyết được nhược điểm này và nhớ đó giúp functional component có thể thực hiện những tính năng mà trước kia class component mới có thể thực hiện được.
- Class component: Phức tạp hơn function component, sử dụng ES6 class và vận hành thông qua lifecycle methods. Hiện này đã ít được sử dụng trong các ứng dụng React hiện đại.

### <u>Prop và default props trong react </u>

React cho phép truyền dữ liệu giữa các component thông qua props. Nó là object chứa dữ liệu từ component cha và có thể sử dụng trong component con để hiển thị lên giao diện hay xử lý logic của component.
Ta có thể gán default props cho component con bằng dữ liệu định sẵn để tránh xảy ra undifined khi component cha không truyền dữ liệu cho component con.

### <u>State trong React và cách update state</u>

State là dữ liệu tùy biến được sử dụng bên trong React component để kiểm soát hành vi và render giao diện. Khi state thay đổi, React re-render component và cập nhật UI.
Các state có thể được cập nhật bằng setter function. Quá trình cập nhật là bất đồng bộ và có thể được trigger bởi event, user interation hay API responses.

### <u>Sự khác biệt giữa state va props</u>

| PROPS                                                              | STATE                                                                               |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| The Data is passed from one component to another.                  | The Data is passed within the component only.                                       |
| It is Immutable (cannot be modified).                              | It is Mutable ( can be modified).                                                   |
| Props can be used with state and functional components.            | The state can be used only with the state components/class component (Before 16.0). |
| Props are read-only.                                               | The state is both read and write.                                                   |
| Example: Passing a title or onClick handler to a button component. | Example: A counter value that increases when you click a button.                    |

### <u>Sự khác biệt giữa controlled va uncontrolled component</u>

| Controlled Components                                           | Uncontrolled Components                                 |
| --------------------------------------------------------------- | ------------------------------------------------------- |
| The React state controls the form input value.                  | The DOM manages the input value.                        |
| Every change in input updates the state via onChange.           | React uses ref to access the current value when needed. |
| Provides full control over input data.                          | Less code, simpler for basic forms.                     |
| Useful for validation, conditional rendering, or complex forms. | Less control over validation and state management.      |

### <u>Các hook cơ bản</u>

I. **useState** – Quản lý trạng thái (State)
Đây là hook phổ biến nhất, giúp bạn khai báo biến state trong functional component. Khi state thay đổi, component sẽ được render lại (re-render) để cập nhật giao diện.

```js
const [state, setState] = useState(initialState);
```

- **state**: Giá trị hiện tại của biến.
- **setState**: Hàm dùng để cập nhật giá trị mới cho state.
- **initialState**: Giá trị khởi tạo ban đầu.
  Ví dụ:

```js
import React, { useState } from "react";

function Counter() {
  // Khai báo biến đếm 'count' bắt đầu từ 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Bạn đã bấm {count} lần</p>
      {/* Khi click, gọi setCount để tăng giá trị, giao diện sẽ tự cập nhật */}
      <button onClick={() => setCount(count + 1)}>Bấm vào tôi</button>
    </div>
  );
}
```

II. **useEffect** – Xử lý tác vụ phụ (Side Effects)
Được dùng để xử lý các tác vụ không liên quan trực tiếp đến việc render UI, như: gọi API, thao tác trực tiếp với DOM, hoặc thiết lập subscription. Nó thay thế cho **componentDidMount**, **componentDidUpdate**, và **componentWillUnmount** trong **class component**.

```js
useEffect(() => {
  // Code xử lý side effect
  return () => {
    // Code dọn dẹp (cleanup) - tùy chọn
  };
}, [dependencies]); // Mảng phụ thuộc
```

Cách dùng dependencies (Mảng phụ thuộc):

- **[] (Mảng rỗng)**: Chỉ chạy 1 lần duy nhất sau khi component mount (giống componentDidMount).
- **[prop, state]**: Chạy mỗi khi các biến trong mảng này thay đổi.
- **Không có mảng**: Chạy lại sau mỗi lần render (không khuyến khích vì dễ gây chậm).
  ví dụ:

```js
import React, { useState, useEffect } from "react";

function UserData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Giả lập gọi API
    fetch("https://api.example.com/user")
      .then((response) => response.json())
      .then((user) => setData(user));

    // Cleanup function (ví dụ: hủy event listener khi component unmount)
    return () => {
      console.log("Component đã bị hủy");
    };
  }, []); // Mảng rỗng -> Chỉ chạy 1 lần

  if (!data) return <p>Đang tải...</p>;
  return <p>Xin chào, {data.name}</p>;
}
```

III. **useContext** – Chia sẻ dữ liệu toàn cục
Giúp bạn truyền dữ liệu qua cây component mà không cần phải truyền props thủ công qua từng cấp (tránh lỗi "**Prop Drilling**"). Thường dùng cho theme (sáng/tối), ngôn ngữ, hoặc thông tin user đăng nhập.
Ví dụ:

```js
import React, { useContext } from "react";

// 1. Tạo Context
const ThemeContext = React.createContext("light");

function App() {
  return (
    // 2. Cung cấp giá trị (Provider)
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  // 3. Sử dụng giá trị (Consumer) mà không cần props từ Toolbar
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme === "dark" ? "#333" : "#fff" }}>
      I am {theme}
    </button>
  );
}
```

IV. **useRef** – Tham chiếu đến DOM hoặc lưu giá trị bền vững
useRef có 2 tác dụng chính:

1. Truy cập trực tiếp vào một phần tử DOM (ví dụ: focus vào ô input).
2. Lưu trữ một giá trị có thể thay đổi nhưng không gây ra re-render khi giá trị đó đổi.

```js
import React, { useRef } from "react";

function TextInputWithFocusButton() {
  const inputEl = useRef(null); // Khởi tạo ref

  const onButtonClick = () => {
    // Truy cập phần tử DOM thật qua thuộc tính .current
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus vào ô nhập liệu</button>
    </>
  );
}
```

_V._ **useMemo** – Tối ưu hiệu năng (Cache kết quả tính toán)

Trong React, mỗi khi component re-render, toàn bộ code trong function đó sẽ chạy lại. Nếu bạn có một hàm tính toán nặng (ví dụ: lọc danh sách 10.000 phần tử), việc tính đi tính lại mỗi lần render là rất lãng phí.

**useMemo** giúp bạn ghi nhớ (cache) kết quả của một phép tính và chỉ tính lại khi đầu vào thay đổi.

```js
const cachedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]); // Chỉ tính lại khi 'a' hoặc 'b' thay đổi
```

Ví dụ:

```js
import React, { useState, useMemo } from "react";

function ProductList({ products }) {
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("light"); // State này không liên quan đến products

  // VẤN ĐỀ: Nếu không có useMemo, mỗi lần user đổi 'theme',
  // hàm filter này sẽ chạy lại dù danh sách products không đổi -> Gây chậm.

  // GIẢI PHÁP: Dùng useMemo
  const filteredProducts = useMemo(() => {
    console.log("Đang lọc danh sách..."); // Để kiểm tra log
    return products.filter((product) => product.name.includes(search));
  }, [products, search]); // Chỉ chạy lại khi 'products' hoặc 'search' đổi

  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Đổi theme (Hiện tại: {theme})
      </button>

      <ul>
        {filteredProducts.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

**Khi nào KHÔNG nên dùng useMemo?**

- Đừng lạm dụng cho các phép tính đơn giản (cộng trừ nhân chia cơ bản). Chi phí bộ nhớ để cache đôi khi còn đắt hơn chi phí tính toán lại.
- Chỉ dùng khi bạn thấy ứng dụng bị chậm (lag) do tính toán nặng.

VI. **Custom Hooks** – Tự tạo Hook riêng (Tái sử dụng Logic)
Custom Hook thực chất là một hàm JavaScript bình thường, nhưng bắt buộc phải bắt đầu bằng từ khóa use (ví dụ: **useFetch**, **useWindowSize**). Bên trong **Custom Hook**, bạn có thể gọi các hook khác (**useState**, **useEffect**...).

Tại sao cần Custom Hook? Giả sử bạn có 2 components khác nhau (Trang chủ và Trang chi tiết) đều cần theo dõi kích thước cửa sổ trình duyệt. Thay vì copy-paste code useEffect, bạn tách nó ra thành một Custom Hook.
**Ví dụ**: Tạo hook useWindowWidth
**Bước 1:** Viết Custom Hook (file useWindowWidth.js)

```js
import { useState, useEffect } from "react";

// Quy tắc: Tên function phải bắt đầu bằng 'use'
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width; // Trả về dữ liệu cần thiết
}

export default useWindowWidth;
```

**Bước 2:** Sử dụng trong Component

```js
import React from "react";
import useWindowWidth from "./useWindowWidth";

function MyComponent() {
  // Gọi hook như một hàm bình thường
  const width = useWindowWidth();

  return (
    <div style={{ backgroundColor: width > 768 ? "green" : "red" }}>
      Màn hình hiện tại rộng: {width}px
      {width < 768 && <p>Bạn đang xem trên Mobile</p>}
    </div>
  );
}
```

**Quy tắc vàng của Hooks:**

1. Chỉ gọi Hooks ở cấp cao nhất (Top-level) của function. Không gọi trong vòng lặp, điều kiện if/else, hoặc function lồng nhau.
2. Chỉ gọi Hooks từ React Function Components hoặc Custom Hooks.
