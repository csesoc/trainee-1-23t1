import { useNavigate } from 'react-router-dom';
import React from 'react';

function Register () {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPass, setConfirmPass] = React.useState('');
  const [validEmail, setValidEmail] = React.useState(false);
  const [validPass, setValidPass] = React.useState(false);

  const navigate = useNavigate();
  const navToLogin = () => {
    navigate('/admin/auth/login');
  }
  const navToDetails = () => {
    navigate('/admin/auth/details');
  }

  const onSubmit = () => {
    if (validEmail && validPass) {
      // submit(email, password);
      navToDetails();
    } else {
      if (!validEmail) alert("plox gib valid email");
      if (!validPass) alert("passwords no matchy matchy :c")
    }
  }

  const checkEmail = () => {
    const input = document.getElementById('email-input');
    if (input) {
      if (!RegExp('^.+\@.+\..+$').test(email)) {
        input.classList.remove('border-green-700');
        input.classList.add('border', 'border-red-500');
        setValidEmail(false);
      } else {
        input.classList.remove('border-red-500');
        input.classList.add('border', 'border-green-700');
        setValidEmail(true);
     }
    }
  }

  const checkPasswords = () => {
    const input = document.getElementById("confirm-pass-input");
    if (input) {
      if (!(confirmPass === password) || (confirmPass === "")) {
        console.log("not equal");
        input.classList.remove('border-green-700');
        input.classList.add('border', 'border-red-500');
        setValidPass(false);
      } else {
        console.log("equal");
        input.classList.remove('border-red-500');
        input.classList.add('border', 'border-green-700');
        setValidPass(true);
      }
    }
  }

  return (
    <div className="container flex justify-center items-center min-h-screen bg-theme-yellow">
      <div className="container flex-auto max-w-md max-h-min px-10 py-5 rounded-xl shadow-md bg-theme-white">
        <p className="font-bold text-3xl">Register</p>
        <br />
        <form>
          <div className="container flex items-start flex-col">
            <label className="text-sm">Email</label>
            <input 
              id="email-input"
              type="email"
              className="form-input shadow w-full px-3 py-2 mt-2 rounded-xl border-0"
              placeholder="Enter your email"
              onChange={e => setEmail(e.target.value)}
              onBlur={checkEmail}/>
            <br />
            <label className="text-sm">Password</label>
            <input 
              id="password-input"
              type="password"
              className="form-input shadow w-full px-3 py-2 mt-2 rounded-xl border-0"
              placeholder="Enter your password"
              onChange={e => setPassword(e.target.value)}/>
            <br />
            <label className="text-sm">Confirm Password</label>
            <input
              id="confirm-pass-input"
              type="password"
              className="form-input shadow w-full px-3 py-2 mt-2 rounded-xl border-0"
              placeholder="Confirm your password"
              onChange={e => setConfirmPass(e.target.value)}
              onBlur={checkPasswords}/>
            <br />
            <button type="submit" className="w-full px-2 py-3 rounded-xl border-0 bg-theme-red hover:bg-[#e37876]" onClick={onSubmit}>
              <p className="font-bold">Register</p>
            </button> 
          </div>
        </form>
        <br />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-sm mb-2">Already a member?</p>
          <button className="font-bold text-sm text-theme-blue hover:underline" onClick={navToLogin}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Register;