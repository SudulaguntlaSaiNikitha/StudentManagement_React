import React from 'react'
import {Link, Outlet, Route} from 'react-router-dom'
import Std from './Std'
const SStudent = () => {
  const users=[
    { id:'12h2',name :'Nikitha', email: '21b01a12h2@svecw.edu.in'},
    { id:'12h6',name :'Nithya', email: '21b01a12h6@svecw.edu.in'},
    { id:'12I0',name :'Lalitha', email: '21b01a12I0@svecw.edu.in'},
    { id:'12E4',name :'Sushma', email: '21b01a12e4@svecw.edu.in'},
     { id:'12E9',name :'Deepika', email: '21b01a12e9@svecw.edu.in'},
    { id:'12JO',name :'Kavya', email: '21b01a12JO@svecw.edu.in'},
  ]
  return (
    <div>
  <h1>This is student page</h1>
      <br/>
      <h2>21B01A</h2>
      <div style={{display:'inline-flex',marginLeft:'90px'}}>
       <div>
       
      {  users.map((item) =>
        <Link to={"Std/"+item.id}><h3>{item.id}</h3></Link>)
      }
      </div>
      <div  style={{marginLeft:'100px',backgroundColor:'black',color:'white',width:'900px',height:'300px'}}>
        <p style={{paddingTop:'30px'}}></p>
      <p style={{marginLeft:'30px'}}><Outlet/></p>
      </div>
      </div>
    </div>
  )
}
export default SStudent
