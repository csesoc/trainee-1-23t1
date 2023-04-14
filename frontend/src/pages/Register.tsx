import { useNavigate } from 'react-router-dom';

function Register () {
  const navigate = useNavigate();
  const navToLogin = () => {
    navigate('/admin/auth/login');
  }

  return (
    <div className="container flex justify-center items-center min-h-screen bg-theme-yellow">
      <div className="container flex-auto max-w-md max-h-min px-10 py-5 rounded-xl shadow-md bg-theme-white">
        <p className="font-bold text-3xl">Register</p>
        <br />
        <form>
          <div className="container flex items-start flex-col">
            <p className="text-sm">Email</p>
            <input type="email" className="form-input w-full px-3 py-2 mt-2 rounded-xl border-0 text-sm" placeholder="Enter your email"></input>
            <br />
            <p className="text-sm">Password</p>
            <input type="password" className="form-input w-full px-3 py-2 mt-2 rounded-xl border-0 text-sm" placeholder="Enter your password"></input>
            <br />
            <p className="text-sm">Confirm Password</p>
            <input type="password" className="form-input w-full px-3 py-2 mt-2 rounded-xl border-0 text-sm" placeholder="Confirm your password"></input>
            <br />
            <button className="w-full px-2 py-3 rounded-xl border-0 bg-theme-red hover:bg-[#e37876]">
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