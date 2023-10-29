import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from './UserSlice/UserSlice'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

function Create() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState({
      name : "",
      email : ""
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setValues({ name: "", email: ""});
      dispatch(addUser({
      id:  uuidv4(),
      name: values.name,
      email: values.email
    }));
    navigate("/")
  
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name :</label>
                <input type='text' name='name'  value={values.name}
          onChange={(e) => setValues({...values, name: e.target.value})} />
                <label htmlFor='name'>email :</label>
                <input type='email' name='email'  value={values.email}
          onChange={(e) => setValues({...values, email: e.target.value})} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Create
