import { useNavigate } from 'react-router-dom';

function Login () {
  const navigate = useNavigate();
  const navToRegister = () => {
    navigate('/admin/auth/register');
  }

  return (
    <div className="container flex justify-center items-center min-h-screen bg-theme-yellow">
      <div className="container flex-auto max-w-md max-h-min px-10 py-5 rounded-xl shadow-md bg-theme-white">
        <p className="font-bold text-3xl">Login</p>
        <br />
        <form>
          <div className="container flex items-start flex-col">
            <label className="text-sm">Email</label>
            <input type="email" className="form-input w-full px-3 py-2 mt-2 rounded-xl border-0 text-sm" placeholder="Enter your email"></input>
            <br />
            <label className="text-sm">Password</label>
            <input type="password" className="form-input w-full px-3 py-2 mt-2 rounded-xl border-0 text-sm" placeholder="Enter your password"></input>
            <br />
            <button className="w-full px-2 py-3 rounded-xl border-0 bg-theme-red hover:bg-[#e37876]">
              <p className="font-bold">Login</p>
            </button> 
          </div>
        </form>
        <br />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-sm mb-2">Not a member?</p>
          <button className="font-bold text-sm text-theme-blue hover:underline" onClick={navToRegister}>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Login;

