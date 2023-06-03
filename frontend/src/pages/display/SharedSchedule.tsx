import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { User } from "firebase/auth";

import { ColourKey } from '../../components/Timetable';
import PageTemplate from '../../components/PageTemplate';
import { showTime, weekDays } from '../../components/Timetable';

const SharedSchedule = () => {
	const navigate = useNavigate();
	const[user, setUser] = useState<User | null>(null);
	const [uTimes, setUTimes] = useState<Number[]>([]);
	const [pTimes, setPTimes] = useState<Number[]>([1, 3, 4, 7, 14, 21, 8]);

	/**
	 * Gets user data ONCE
	 */
	useEffect(() => {
		auth.onAuthStateChanged(user => {
			setUser(user);
			getUserData();
		});
	}, [user]);

	/**
	 * Gets the current logged in user and updates uTimes
	 */
	const getUserData = async () => {
		try {
			if (user) {
				const userRef = doc(db, "users", user.uid);
				const userSnap = await getDoc(userRef);

				if (userSnap.exists()) {
					setUTimes(userSnap.data().times ?? []);
				}
			}
		} catch (e) {
			alert(e);
		}
	};

	/**
	 * renders cells depending on:
	 * -> overlap
	 * -> user/partner
	 * -> empty 
	 */
	const showCells = () => {
		let content = [];
		for (let i = 0; i < 112; i++) {
			if (uTimes.includes(i) && pTimes.includes(i)) {
				// shared times
				content.push(
					<div className="bg-theme-white hover:bg-opacity-50 rounded-md h-7">
						<div className="h-7 w-full border-black border border-opacity-30 bg-alt-green hover:bg-lime-700"/>
					</div>
				);
				} else if (uTimes.includes(i)) {
				// user's times only
				content.push(
					<div className="bg-theme-white hover:bg-stone-300 rounded-md h-7">
						<div className="h-7 w-full border-black border border-opacity-30 bg-alt-blue bg-opacity-50"/>
					</div>
				);
			} else if (pTimes.includes(i)) {
				// partner's times only
				content.push(
					<div className="bg-theme-white hover:bg-stone-300 rounded-md h-7">
						<div className="h-7 w-full border-black border border-opacity-30 bg-alt-yellow bg-opacity-50"/>
					</div>
				);
			} else {
				// blank cell
				content.push(
					<div className="bg-theme-white hover:bg-stone-300 rounded-md h-7">
						<div className="h-7 w-full border-black border border-opacity-30"/>
					</div>
				);
			}
		}
		return content;
	}

	return (
		<PageTemplate showYellowBg={false}>
		<div className="flex justify-center items-center w-full h-screen bg-theme-black">
			<div className="absolute container h-3/4 w-8/12 justify-center shadow-lg empty:bg-theme-white -rotate-3"/>
			<div className=" overflow-auto absolute container h-3/4 w-8/12 drop-shadow-lg bg-theme-white p-6">
				
				<div className="flex h-full w-full">
					<div className="grid w-1/12 grid-cols-1 leading-6 h-fit text-center text-xs">
						<div className="bg-theme-white rounded-lg hover:bg-theme-yellow"><div className="h-6"/></div>
						{showTime()}
					</div>

					<div className="flex-col w-full h-full">
						<div className="grid w-11/12 grid-cols-7 leading-6 h-fit bg-theme-white text-center text-xs">
							{weekDays(7)}
						</div>
						<div className="grid w-11/12 grid-cols-7 leading-6 h-fit bg-theme-white text-center text-xs border-black border-2">
							{showCells()}
						</div>
					</div>
				</div>
			</div>
			<ColourKey/>
		</div>
		</PageTemplate>

	);
}

export default SharedSchedule;