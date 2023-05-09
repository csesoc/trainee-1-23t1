import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from 'react';
import PageTemplate from '../components/PageTemplate';

function Login () {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  
  const navToRegister = () => {
    navigate('/admin/auth/register');
  }

  const auth = getAuth();
  const onSubmit = () => {
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password);
    }
  }

  const checkEmail = () => {
    const input = document.getElementById('email-input');
    if (!RegExp('^.+\@.+\..+$').test(email)) {
      if (input) {
        console.log("hello");
        input.classList.remove('border-green-700');
        input.classList.add('border', 'border-red-500');
      }
    } else {
      if (input) {
        console.log("hello");
        input.classList.remove('border-red-500');
        input.classList.add('border', 'border-green-700');
      }
    }
  }

  return (
    <PageTemplate  showBottomNav={false}>
      <div className='container flex justify-center items-center min-h-screen bg-theme-yellow'>
        <div className='container flex-auto max-w-md max-h-min px-10 py-5 rounded-xl shadow-md bg-theme-white'>
          <p className='font-bold text-3xl'>Login</p>
          <br />
          <form>
            <div className='container flex items-start flex-col'>
              <label className='text-sm'>Email</label>
              <input
                id='email-input'
                type='email'
                className='form-input shadow w-full px-3 py-2 mt-2 rounded-xl border-0'
                placeholder='Enter your email'
                onChange={e => setEmail(e.target.value)}
                onBlur={checkEmail} />
              <br />
              <label className='text-sm'>Password</label>
              <input
                type='password'
                className='form-input shadow w-full px-3 py-2 mt-2 rounded-xl border-0'
                placeholder='Enter your password'
                onChange={e => setPassword(e.target.value)}>
              </input>
              <br />
              <button type='submit' className='w-full px-2 py-3 rounded-xl border-0 bg-theme-red hover:bg-[#e37876]' onClick={onSubmit}>
                <p className='font-bold'>Login</p>
              </button>
            </div>
          </form>
          <br />
          <div className='flex flex-col justify-center items-center'>
            <p className='font-bold text-sm mb-2'>Not a member?</p>
            <button className='font-bold text-sm text-theme-blue hover:underline' onClick={navToRegister}>Register</button>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}

export default Login;

