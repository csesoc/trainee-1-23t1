import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

import { useAuth } from '../context/AuthContext';
import { User } from 'firebase/auth';

import PageTemplate from '../components/PageTemplate';

// want to update ur password?? haha too bad
// perform checks in the future but rn we ball
const EditDetails = () => {
	const [user, setUser] = useState<User | null>(null);
	const [name, setName] = useState('--');
	const [handle, setHandle] = useState<String | null>(null);
	const [bio, setBio] = useState('');

	const [degree, setDegree] = useState('--');
	const [year, setYear] = useState(0);
	const [hrsPw, setHrsPw] = useState(0);
	const [wam, setWam] = useState('--');
	const [mbti, setMbti] = useState('--');
	const [comms, setComms] = useState('--');
	
	const [tutes, setTutes] = useState<Number[]>([]);
	const [times, setTimes] = useState<Number[]>([]);

	/**
	 * Retrieve's user's data from database once
	 * and updates params to existing data (if any)
	 */
	useEffect(() => {
		auth.onAuthStateChanged(user => {
			setUser(user);
			getUserData();
		});
	}, [user]);

	const getUserData = async () => {
		try {
			if (user) {
				const userRef = doc(db, "users", user.uid);
				const userSnap = await getDoc(userRef);

				if (userSnap.exists()) {
					setName(userSnap.data().name ?? '--');
					setHandle(userSnap.data().handle ?? null);
					setDegree(userSnap.data().degree ?? null);
					setYear(userSnap.data().year ?? 0);
					setWam(userSnap.data().wam ?? '--');
					setMbti(userSnap.data().mbti ?? '--');
					setBio(userSnap.data().bio ?? '');
					setTimes(userSnap.data().times ?? []);
					setTutes(userSnap.data().tutes ?? []);
					setHrsPw(userSnap.data().hrsPw ?? 0);
					setComms(userSnap.data().comms ?? 'any');
				}
			}
		} catch (e) {
			alert(e);
		}
	}

	/**
	 * Updates the user's data on the database upon form submission
	 * -> Note that tute/time preferences are updated separately 
	 *    on their respecitve pages
	 */
	const navigate = useNavigate();
  const navToLandingPage = () => {
    addDetailsToUser();
    navigate('/');
  };

	const { authUid } = useAuth();

  const addDetailsToUser = async () => {
    try {
      if (authUid) {
        const userRef = doc(db, 'users', authUid);
        await updateDoc(userRef, {
					name: name,
					handle: handle,
					bio: bio,

          degree: degree,
          year: year,
					hrsPw: hrsPw,
          mbti: mbti,
          wam: wam,
					comms: comms,
        });
      }
    } catch (e) {
      alert(e);
    }
  };

	/**
	 * Render's users tutes
	 */
	const getTutes = () => {
		return tutes.map(tute => 
			<div className="bg-theme-yellow h-fit pb-8 rounded-md m-4 text-xs drop-shadow-md p-2">
				<p>{"tute.time"}</p>
				<p>{"tute.location"}</p>
			</div>
		);
	}

	/**
	 * Renders simple preview timetable for availabilities
	 */
	const getTimes = () => {
		let content = [];
		for (let i = 0; i < 112; i++) {
			if (times.includes(i)) {
				content.push(
					<div className="bg-alt-green w-full border-theme-black border-opacity-30 border"><div className="h-3"/></div>
				)
			} else {
				content.push(
					<div className="bg-theme-white w-full border-theme-black border-opacity-30 border"><div className="h-3"/></div>
				)
			}
		}
		return content;
	}

	return (
		<PageTemplate>
			<div className="container flex-auto max-w-1/2 max-h-min px-10 py-5 m-10 mb-20 rounded-xl shadow-md bg-theme-white">
				<p className="font-bold text-3xl mb-2">Edit Details</p>
				<p className="text-sm pb-4">Click 'Save Details' to update with your changes!</p>
				<form>
					<div className="container flex flex-col text-left">

						<label className="text-sm mt-4">Name</label>
						<input
							type="text"
							className="form-input shadow w-full px-3 py-2 mt-2 rounded-xl border-0 text-sm"
							placeholder={"What should we call you?"}
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>

						<label className="text-sm mt-4">Bio</label>
						<input
							type="text"
							className="form-input shadow w-full px-3 py-2 mt-2 rounded-xl border-0 text-sm"
							placeholder={"Tell us a bit about yourself!"}
							value={bio}
							onChange={(e) => setBio(e.target.value)}
						/>

						<label className="text-sm mt-4">Degree</label>
						<input
							type="text"
							className="form-input shadow w-full px-3 py-2 mt-2 rounded-xl border-0 text-sm"
							placeholder={"What do you study?"}
							value={degree}
							onChange={(e) => setDegree(e.target.value)}
						/>

						<label className="text-sm mt-4">Preferred Platform</label>
						<input
							type="text"
							className="form-input shadow w-full px-3 py-2 mt-2 rounded-xl border-0 text-sm"
							placeholder={"What do you study?"}
							value={comms}
							onChange={(e) => setComms(e.target.value)}
						/>

						<label className="text-sm mt-4">Year of Study</label>
						<input
							type="number"
							className="form-input shadow w-full px-3 py-2 mt-2 rounded-xl border-0 text-sm"
							placeholder="1"
							value={year}
							onChange={(e) => setYear(e.target.valueAsNumber)}
						/>

						<label className="text-sm mt-4">Hours Per Week</label>
						<input
							type="number"
							className="form-input shadow w-full px-3 py-2 mt-2 rounded-xl border-0 text-sm"
							placeholder="1"
							value={hrsPw}
							onChange={(e) => setHrsPw(e.target.valueAsNumber)}
						/>

						<label className="text-sm mt-4">WAM (optional)</label>
						<select
							className="form-input shadow w-full px-3 py-2 mt-2 rounded-xl border-0 text-sm"
							placeholder="Confirm your password"
							value={wam}
							onChange={(e) => setWam(e.target.value)}
						>
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
							value={mbti}
							onChange={(e) => setMbti(e.target.value)}
						/>
						<p className="text-xs mt-2">
							Your Myers-Brigg personality type. This will be used to measure compatability across possible partners.
							<a className="text-xs text-theme-blue" href="https://www.16personalities.com/" target="_blank">
								{' '}
								Take the quiz here!
							</a>
						</p>

						<div className="flex flex-col md:flex-row justify-center items-stretch h-1/3 pb-10 mt-10">   
							<button 
							onClick={() => navigate('/profile/tute/edit')}
							className="bg-theme-white hover:bg-gradient-to-b hover:from-theme-cream flex-1 p-4 md:w-1/2">
								<p className="font-bold text-theme-dPink">Preferred tute times: </p>
								<div 
									className="container overflow-scroll">
									{getTutes()}
								</div>
							</button>

							<button 
							onClick={() => navigate('/profile/time/edit')}
							className="bg-theme-white hover:bg-gradient-to-b hover:from-theme-cream flex-1 p-4 md:w-1/2">
								<p className="font-bold text-theme-dPink">Working time availability: </p>
								<div className="flex rounded-md m-4 overflow-scroll">
									<div className="grid grid-cols-7 w-full border-theme-black border-2">
										{getTimes()}
									</div>
								</div>
							</button>

						</div>
					</div>
					<button
							className="content-center w-full px-2 py-3 rounded-xl border-0 mt-4 bg-theme-red hover:bg-theme-yellow"
							onClick={navToLandingPage}>
							<p className="font-bold">Save Details</p>
					</button>
				</form>
			</div>
		</PageTemplate>
	);
}

export default EditDetails;