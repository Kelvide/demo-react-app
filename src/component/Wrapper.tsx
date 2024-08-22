import React from 'react'

type myComponent = {
  children: React.ReactElement
}

const Wrapper: React.FC<myComponent> = ({ children }) => {
  return (
    <div>
      <h1 style={{ background:"black", color:'white' }}>Welcome</h1>
      
      {children}
    </div>
  )
}

export default Wrapper