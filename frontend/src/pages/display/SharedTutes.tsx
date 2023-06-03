import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { User } from "firebase/auth";

import { ColourKey } from '../../components/Timetable';
import PageTemplate from '../../components/PageTemplate';
import { showTime, weekDays } from '../../components/Timetable';

const SharedTutes = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState<User | null>(null);
	const [uTutes, setUTutes] = useState<Number[]>([]);
	const [pTutes, setPTutes] = useState<Number[]>([1, 3, 5, 7, 50, 45]);

	/**
	 * Gets user data ONCE
	 */
	useEffect(() => {
		  auth.onAuthStateChanged(user => {
			setUser(user);
			getUserData();
			getSharedTutes();
		});
	}, [user]);

	/**
	 * Gets the current logged in user and updates the tutes to be displayed
	 */
	const getUserData = async () => {
		try {
			if (user) {
				const userRef = doc(db, "users", user.uid);
				const userSnap = await getDoc(userRef);

				if (userSnap.exists()) {
					setUTutes(userSnap.data().tutes ?? []);
				}
			}
		} catch (e) {
			alert(e);
		}
	};

	/**
	 * Puts shared tutes in an array (need for sidebar)
	 */
	const getSharedTutes = () => {
		const shared = []
		for (let i = 0; i < 80; i++) {
			if (uTutes.includes(i) && pTutes.includes(i)) {
				shared.push(i);
			}
		}
		return shared;
	}


	/**
	 * renders cells upon refresh in 1 of 4 colours:
	 * (inefficient but it works)
	 * -> 'blank'
	 * -> user's tutes
	 * -> partner's tutes
	 * -> shared tutes
	 */
	const showCells = () => {
		let content = [];
		for (let i = 0; i < 80; i++) {
			if (uTutes.includes(i) && pTutes.includes(i)) {
				// shared tutes
				content.push(
					<div className="bg-theme-white hover:bg-opacity-50 rounded-md h-7">
						<div className="h-7 w-full border-black border border-opacity-30 bg-alt-green hover:bg-lime-700"/>
					</div>
				);
			} else if (uTutes.includes(i)) {
				// user's tutes only
				content.push(
					<div className="bg-theme-white hover:bg-stone-300 rounded-md h-7">
						<div className="h-7 w-full border-black border border-opacity-30 bg-alt-blue bg-opacity-50"/>
					</div>
				);

			} else if (pTutes.includes(i)) {
				// partner's tutes only
				content.push(
					<div className="bg-theme-white hover:bg-stone-300 rounded-md h-7">
						<div className="h-7 w-full border-black border border-opacity-30 bg-alt-yellow bg-opacity-50"/>
					</div>
				);

			} else {
				// blank cell (no tutes)
				content.push(
					<div className="bg-theme-white hover:bg-stone-300 rounded-md h-7">
						<div className="h-7 w-full border-black border border-opacity-30"/>
					</div>
				);
			}
		}
		return content;
	}

	/**
	 * 	renders tuteblocks (right side bar things)
	 * 	in order of:
	 *  -> shared tutes
	 * 	-> tutes that either user has
	 */
	const tuteBlocks = () => {
		const shownTutes = [];
		let content = [];

		return pTutes.map(tute => 						
			<div className="bg-alt-green rounded-md p-2 pb-5 mb-2 text-xs">
				<p>Brass Lab J17 305</p>
				<p>13/25 (Weeks 1-5, 7-10)</p>
			</div>
		);
	}

	return (
		<PageTemplate showYellowBg={false}>
			<div className="flex justify-center items-center w-full h-screen bg-theme-black">
				<div className="absolute container h-3/4 w-8/12 justify-center shadow-lg empty:bg-theme-white -rotate-3"/>
				<div className=" overflow-auto absolute container h-3/4 w-8/12 drop-shadow-lg bg-theme-white p-6">
					<div className="flex h-full w-full">

						<div className="grid w-1/12 grid-cols-1 leading-6 h-fit text-center text-xs">
							<div className="bg-theme-white rounded-lg"><div className="h-6"/></div>
							{showTime()}
						</div>

						<div className="flex-col w-7/12 h-full">
							<div className="grid grid-cols-5 leading-6 h-fit bg-theme-white text-center text-xs">
								{weekDays(5)}
							</div>
							<div className="grid grid-cols-5 leading-6 h-fit bg-theme-white text-center text-xs border-black border-2">
								{showCells()}
							</div>
						</div>

						<div className="flex-col w-4/12 p-6 overflow-scroll">
							{tuteBlocks()}
						</div>

					</div>
				</div>
				<ColourKey/>
			</div>
		</PageTemplate>
	);
}

export default SharedTutes;