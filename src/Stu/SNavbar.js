import React from 'react'
import {NavLink} from 'react-router-dom'
import './Snav.css'
import ana from './ana.jpeg'
const SNavbar = () => {
  const changestyle=({isActive})=>
  {
    return{
      color:isActive?'orange':'white' 
    }
  }

  return (
    <div>
    <div style={{backgroundColor:'black',height:'70px',width:'100%',display:'inline-flex'}}>
      <img src={ana} style={{width:'40px',height:'50px',marginLeft:'20px',borderRadius:'10px',paddingTop:'10px'}} alt="t"/>
        <NavLink to='/'  className='a' style={changestyle}><h1>Home</h1></NavLink>
        <NavLink to='Dashboard' className='a' style={changestyle} ><h1>Dashboard</h1></NavLink>
        <NavLink to='Student' className='a' style={changestyle} ><h1>Students</h1></NavLink>
        <NavLink to='Course'  className='a' style={changestyle}  ><h1>Course</h1></NavLink>
        <NavLink to='Grade'  className='a' style={changestyle} ><h1>Grade</h1></NavLink>
        <NavLink to='Login' className='a' style={changestyle} ><h1>Login</h1></NavLink>
       
    </div>
    </div>
  )
}

export default SNavbar
