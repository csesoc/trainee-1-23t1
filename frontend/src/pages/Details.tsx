import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import anon from '../assets/anon.png';

const Details = () => {
  const [degree, setDegree] = useState('');
  const [year, setYear] = useState(0);
  const [mbti, setMbti] = useState('');
  const [wam, setWam] = useState('');

  const navigate = useNavigate();
  const navToLandingPage = () => {
    addDetailsToUser();
    navigate('/');
  }

  const user = auth.currentUser;

  const addDetailsToUser = async () => {
    try {
      // Register user
      if (user) {
        const userRef = doc(db, 'users', `${user.uid}`);
        await updateDoc(userRef, {
          degree: degree,
          year: year,
          photo: anon,
          comms: 'any',
          mbti: mbti,
          wam: wam
        });
      }
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div className="container flex justify-center items-center min-h-screen bg-theme-yellow">
      <div className="container flex-auto max-w-md max-h-min px-10 py-5 rounded-xl shadow-md bg-theme-white">
        <p className="font-bold text-3xl mb-2">Your Details</p>
        <p className="text-sm">So we can match you with the best possible partner 👯</p>
        <br />
        <form>
          <div className="container flex items-start flex-col text-left">
            <label className="text-sm">Degree</label>
            <input 
              type="text"
              className="form-input shadow w-full px-3 py-2 mt-2 rounded-xl border-0 text-sm" 
              placeholder="What do you study?"
              onChange={e => setDegree(e.target.value)}/>
            <label className="text-sm mt-4">Year of Study</label>
            <input 
              type="number" 
              className="form-input shadow w-full px-3 py-2 mt-2 rounded-xl border-0 text-sm" 
              placeholder='1'
              onChange={e => setYear(e.target.valueAsNumber)}/>
            <label className="text-sm mt-4">WAM (optional)</label>
            <select 
              className="form-input shadow w-full px-3 py-2 mt-2 rounded-xl border-0 text-sm" 
              placeholder="Confirm your password"
              onChange={e => setWam(e.target.value)}>
              <option value="none">none</option>
              <option value="HD">HD</option>
              <option value="DN">DN</option>
              <option value="CR">CR</option>
              <option value="PS">PS</option>
              <option value="FL">FL</option>
            </select>
            <label className="text-sm mt-4">MBTI (optional)</label>
            <input 
              type="text"
              className="form-input shadow w-full px-3 py-2 mt-2 rounded-xl border-0 text-sm"
              placeholder="Your personality type"
              onChange={e => setMbti(e.target.value)}/>
            <p className="text-xs mt-2">Your Myers-Brigg personality type. This will be used to measure compatability across possible partners. 
              <a className="text-xs text-theme-blue" href="https://www.16personalities.com/" target="_blank"> Take the quiz here!</a>  
            </p>
            <button className="w-full px-2 py-3 rounded-xl border-0 mt-4 bg-theme-red hover:bg-[#e37876]" onClick={navToLandingPage}>
              <p className="font-bold">Find your partnr!</p>
            </button> 
          </div>
        </form>
      </div>
    </div>
  )
}

export default Details;