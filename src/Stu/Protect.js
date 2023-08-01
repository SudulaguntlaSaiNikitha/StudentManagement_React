import React, { Children } from 'react'
import {Navigate} from'react-router-dom'
const Protect = ({Children}) => {
  const isLoggedin = false
    {if(!isLoggedin){
      return(<Navigate to='/'></Navigate>)
    }
    else{
      return Children;
    }
  }
  
}

export default Protect
