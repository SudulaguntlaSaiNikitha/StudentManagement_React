import React from 'react'
import { useParams } from 'react-router-dom'

const Std = () => {
    const student=useParams()
  return (
    <div>
      <h1>I am studying in SVECW My Id is: {student.id}
      <br/>
      t5</h1>
    </div>
  )
}

export default Std
