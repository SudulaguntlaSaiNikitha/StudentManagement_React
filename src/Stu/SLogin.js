import React from 'react'
import {useForm} from 'react-hook-form'

const SLogin = () => {
  const {register,handleSubmit,formState:{errors}}=useForm();
  const onSubmit = (formdata)=>{console.log(formdata)}
  console.log(errors)

  return (
    <div>
      <h1>this is login page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <table border='0' align="center">
      <tr><td><b>User Name</b></td>
        <td><input type="text" style={{borderRadius:'10px',marginLeft:'30px',width:'200px',height:'50px'}}  placeholder='  21B01A****' {...register('fullname',{required:true,maxLength:10})}/></td></tr>
        <tr><p style={{color:'red'}}>{errors.fullname &&<p>inavalidname</p>}</p></tr>
        <tr>
        <td><b>Password</b></td>
        <td><input type='password' className='a' style={{borderRadius:'10px',width:'200px',height:'50px',}} placeholder='Password' {...register('Password',{required:true,max:10,min:5})} /> </td>
        <td></td></tr>
        <tr><p style={{color:'red'}}>{errors.Password &&<p>Password of min 5 charcters max 10 </p>}</p></tr>
        <tr><input style={{color:'white',borderRadius:'3px',fontSize:'20px',backgroundColor:'green',width:'90px', height:'30px'}} type="submit" value='submit'/></tr>
        </table>
      </form>
    </div>
  )
}
export default SLogin

