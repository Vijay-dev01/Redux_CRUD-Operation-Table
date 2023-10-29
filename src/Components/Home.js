import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {deleteUser} from "./UserSlice/UserSlice"
function Home() {
  const users = useSelector((state) => state.users) ;
  console.log('users', users);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser({id:id}))
  }

  return (
    <div>
      <h2>Redux CRUD Operation</h2>
      <Link to="/create">Create</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/update/${user.id}`}>Edit</Link>
                <button onClick={() =>handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
