import React from 'react'
import {Link }from 'react-router-dom'
function header(){
  return(
      <header style={headerStyle}>
      <h1> my todo list</h1>
      <Link style={linkStyle} to='/'>HOME</Link>|<Link style={linkStyle}to='/about'>ABOUT</Link>
      </header>
  )
}
const headerStyle={
  background: 'black',
  color:'white',
  
}
const linkStyle={
  color: 'white'
}
export default header