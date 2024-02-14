import React, { useState } from 'react'
import { Student } from '../types/Student'
 
 const [formData, setFormData] = useState<Student>({firstName:'', lastName:'', avgMark: 0});
 
 const changeHendler = (event:React.ChangeEvent<HTMLInputElement>): void => {
    formData['firstName'] = event.target.value;
    setFormData({...formData});
    console.log(formData);
 }
 

 export default function AddStudent() {
   return (
     <div>
        <p>form to add a student:</p>
        <input value={formData.firstName} type="text" name='firstName' placeholder='firstName' onChange={changeHendler}/>
        <input value={formData.lastName} type="text" name='lastName' placeholder='lastName'onChange={changeHendler}/>
        <input value={formData.avgMark} type="text" name='avgMark' placeholder='avgMark'onChange={changeHendler}/>
        <button>ADD</button>
     </div>
   )
 }

