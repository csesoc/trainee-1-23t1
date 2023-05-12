import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import PageTemplate from '../components/PageTemplate';
import { auth, db } from '../firebase';
import { useState } from 'react';

import {
  collection,
  doc,
  setDoc,
} from 'firebase/firestore';

const Register = () => {
  const [zid, setZid] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [validName, setValidName] = useState(false);
  const [validZid, setValidZid] = useState(false);

  const navigate = useNavigate();
  const navToLogin = () => {
    navigate('/admin/auth/login');
  }
  const navToDetails = () => {
    navigate('/admin/auth/details');
  }
    // Adds a new user to firebase.
  const register = async (email: string, password: string) => {
    try {
      // Register user
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredentials.user;

      // Add user to database
      const usersRef = collection(db, 'users');
      await setDoc(doc(usersRef, `${user.uid}`), {
        name: name,
        zid: zid,
        email: user.email,
        partners: [],
      });
    } catch (e) {
      alert(e);
    }
  };

  const onSubmit = () => {
    if (validEmail && validName && validZid) {
      register(email, password);
      navToDetails();
    } else {
      if (!validZid) alert("prisoner number required");
      if (!validEmail) alert("plox gib valid email");
      if (!validName) alert("unfortunately, you must be named");
    }
  }

  const checkZid = () => {
    if (zid !== '') {
      setValidZid(true);
    }
  }
  
  const checkName = () => {
    if (name !== '') {
      setValidName(true);
    }
  }

  const checkEmail = () => {
    if (RegExp('^.+\@.+\..+$').test(email)) {
      setValidEmail(true);
    }
  }

  return (
    <PageTemplate showBottomNav={false}>
      <div className='container flex justify-center items-center min-h-screen bg-theme-yellow'>
        <div className='container flex-auto max-w-md max-h-min px-10 py-5 rounded-xl shadow-md bg-theme-white'>
          <p className='font-bold text-3xl'>Register</p>
          <br />
          <form>
            <div className='container flex items-start flex-col'>
              <label className='text-sm'>zID</label>
              <input
                id='zid-input'
                type='text'
                className='form-input shadow w-full px-3 py-2 mt-2 rounded-xl border-0'
                placeholder='your prisoner number'
                onChange={e => setZid(e.target.value)}
                onBlur={checkZid}/>
              <br />
              <label className='text-sm'>Username</label>
              <input
                id='name-input'
                type='text'
                className='form-input shadow w-full px-3 py-2 mt-2 rounded-xl border-0'
                placeholder='or are you who shall not be named??'
                onChange={e => setName(e.target.value)}
                onBlur={checkName}/>
              <br />
              <label className='text-sm'>Email</label>
              <input
                id='email-input'
                type='email'
                className='form-input shadow w-full px-3 py-2 mt-2 rounded-xl border-0'
                placeholder='for... purposes'
                onChange={e => setEmail(e.target.value)}
                onBlur={checkEmail}/>
              <br />
              <label className='text-sm'>Password</label>
              <input
                id='password-input'
                type='password'
                className='form-input shadow w-full px-3 py-2 mt-2 rounded-xl border-0'
                placeholder='the only thing we don&apos;t know'
                onChange={e => setPassword(e.target.value)}/>
              <br />
              <button type='submit' className='w-full px-2 py-3 rounded-xl border-0 bg-theme-red hover:bg-[#e37876]' onClick={onSubmit}>
                  <p className='font-bold'>Register</p>
              </button>
            </div>
          </form>
          <br />
          <div className='flex flex-col justify-center items-center'>
            <p className='font-bold text-sm mb-2'>Already a member?</p>
            <button className='font-bold text-sm text-theme-blue hover:underline' onClick={navToLogin}>Login</button>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}

export default Register;