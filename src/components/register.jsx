import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../ui/input'
import { useDispatch, useSelector } from 'react-redux';
import {  registerUserstart } from '../slice/auth';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.auth);


  function handleRegister(e) {
    e.preventDefault();
    dispatch(registerUserstart())
  }


  return (
    <main className="form-signin w-25 m-auto text-center">
      <form>
        <Link to='/'>
          <img className="mb-4 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIsI9HwvdSE5wx0pEigeQsB0Ko3ILVF8uunw&s" alt="" width="72" height="57"></img>
        </Link>
        <h1 className="h3 mb-3 fw-normal">Please register</h1>

        <Input label='Username' type='text' setState={setUsername} state={username} />
        <Input label='Email address' type='email' setState={setEmail} state={email}/>
        <Input label='Password' type='pasword' setState={setPassword} state={password}/>

        <button className="btn btn-primary w-100 py-2" type="submit" disabled={isLoading} onClick={handleRegister}>{isLoading ? 'loading...' : 'Register'}</button>      </form>
    </main>
  )
}

export default Register