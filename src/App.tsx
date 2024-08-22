// import { useEffect, useState } from "react"

// interface NamesType {
//   name: String,
//   lang: String
// }

// function App() {
//   const [firstState, setFirstState] = useState<string | null>('Kelvin')
//   const [names, setNames] = useState<NamesType[] | null>()
//   const [time, setTime] = useState(5)
//   const [status, setStatus] = useState(true)

//   useEffect(() => {
//     fetch('/names.json')
//       .then((res) => res.json())
//       .then((data) => {
//         setNames(data); console.log(data); console.log(firstState);
//       })

//     // This approach continuously calls setTime with a fixed 'time' value from the initial render.
//     // This can lead to incorrect updates due to stale state, as 'time' may not reflect the latest state value.
//     // setInterval(() => {
//     //   setTime((time) => time + 1)
//     // }, 1000)

//     return () => {

//     }
//   }, [status, firstState, names])


//   return (
//     <div>
//       <p>Hello {firstState}</p>
//       <button onClick={() => { setFirstState("Jay"); setStatus(!status) }}>update</button>

//       <p>Time {time}</p>
//       {/* <p>Names: {names?.join(',')}</p> */}
//     </div>
//   )
// }

// export default App

// // const App = () => {
// //   return (

// //   )
// // }

// // export default App

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import JwtGuard from './util/JwtGuard'
import Wrapper from './component/Wrapper'
import Login from './pages/Login'

const App = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<JwtGuard location="about" app={<Home />} />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  )
}

export default App