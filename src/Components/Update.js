import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser } from './UserSlice/UserSlice';

const EditUser = () => {
  
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter(user => user.id === params.id);
  const { name, email } = existingUser[0];
  const [values, setValues] = useState({
    name,
    email
  });

  const handleEditUser = (e) => {
    e.preventDefault()
    setValues({ name: '', email: '' });
    dispatch(editUser({
      id: params.id,
      name: values.name,
      email: values.email
    }));
    navigate('/');
  }


  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleEditUser}>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} />
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <button >Update User</button>
      </form>
    </div>
  );
};

export default EditUser;
