import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../ui/input'
import { useDispatch, useSelector } from 'react-redux';
import { loginUserstart } from '../slice/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.auth);


  function handleLogin(e) {
    e.preventDefault();
    dispatch(loginUserstart())
  }
  return (
    <main className="form-signin w-25 m-auto text-center">
      <form>
        <Link to='/'>
          <img className="mb-4 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIsI9HwvdSE5wx0pEigeQsB0Ko3ILVF8uunw&s" alt="" width="72" height="57"></img>
        </Link>
        <h1 className="h3 mb-3 fw-normal">Please Login</h1>

        <Input label='Email address' type='email' setState={setEmail} state={email}/>
        <Input label='Password' type='pasword' setState={setPassword} state={password}/>

        <button className="btn btn-primary w-100 py-2" type="submit" disabled={isLoading} onClick={handleLogin}>{isLoading ? 'loading...' : 'login'}</button>
      </form>
    </main>
  )
}

export default Login