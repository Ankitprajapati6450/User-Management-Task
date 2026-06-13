import React from 'react';
import './App.css';
import UserForm from './components/UserForm'
import UserList from './components/UserList';

const App = () => {
  return (
    
    <div className='container'>

      <h1 className='main-heading'> User Mangement System</h1>

      <div className='card'>
        <UserForm />
      </div>

      <div className="card">
        <UserList />
      </div>


    </div>
  )
}

export default App;
