import React, { useEffect, useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Protect from './Protect'
import Dashboard from './Dashboard'
import SHome from './SHome'
import SGrade from './SGrade'
import SCourse from './SCourse'
import SStudent from './SStudent'
import SLogin from './SLogin'
import SNavbar from './SNavbar'
import Std from './Std'
import Pagenofound from './Pagenofound'
const StudentManage = () => {
  return (
    <div>
       <SNavbar/> 
      <Routes>
        <Route path='/' element={<SHome />}/>
        <Route path='Grade' element={<SGrade />}/>
        <Route path='Course' element={<SCourse />}/>
        <Route path='Student' element={<SStudent />}>
          <Route path={"Std/:id"}  element={<Std/>}/>
          </Route>
        <Route path='Login' element={<SLogin />}/>
        <Route path='Dashboard' element={<Protect> <Dashboard/> </Protect>}/>

        <Route path='Dashboard' element={<Dashboard />}/>
        <Route path='*' element={<Pagenofound />}/>
      </Routes>
    </div>
  )
}
export default StudentManage
