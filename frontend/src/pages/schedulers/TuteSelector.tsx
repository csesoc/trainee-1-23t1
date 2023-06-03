import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { User } from "firebase/auth";

import cross from '../../assets/cross.svg';
import tick from '../../assets/tick.svg';

import { showTime, weekDays } from '../../components/Timetable';
import PageTemplate from '../../components/PageTemplate';
import { getCourseData, getCourses } from '../../data/datafns';

console.log(getCourseData("COMP1531"));

const TuteSelector = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState<User | null>(null);
	const [tutes, setTutes] = useState<Number[]>([]);
	const [allTutes] = useState(getCourseData("COMP1531"));

	/**
	 * Gets user data and stores it in 'tutes'
	 * 		-> if tute data exist, set 'tutes' to what exists
	 * 		-> if tute data !exist, create tute object and set 'tutes' to empty arr
	 * if user is invalid, redirects to landing page
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
          if (userSnap.data().tutes) {
            setTutes(userSnap.data().tutes);

          } else {
            setTutes([]);
            updateDoc(userRef, {tutes: []});
          }
        } else {
          setTutes([]);
        }
			}
		} catch (e) {
			alert(e);
		}
	};


	/**
	 * renders cells upon refresh in 1 of 3 colours:
	 * -> 'blank' is unselectable and has nothing
	 * -> 'tute-available' is a selectable cell that has a tute
	 * -> 'tute-selected' is a cell that the user has previously selected
	 */
	const showCells = () => {
		let content = [];
		for (let i = 0; i < 80; i++) {
			if (tutes.includes(i)) {
				// tute-selected cell
				content.push(
					<div className="bg-theme-white hover:bg-stone-300 rounded-md h-7">
						<button 
							onClick={() => updateTutes(i)} 
							className="h-7 w-full border-black border border-opacity-30 bg-alt-green hover:bg-opacity-50">
							<p>{tutes.indexOf(i) + 1}</p>
						</button>
					</div>
				);
			} else if (allTutes.find((x: { index: any; }) => x.index == i)) {
				// tute-available cell
				content.push(				
					<div className="bg-theme-white hover:bg-stone-300 rounded-md h-7">
					<button 
						onClick={() => updateTutes(i)} 
						className="h-7 w-full border-black border border-opacity-30 bg-theme-yellow hover:bg-opacity-50"></button>
					</div>
				);
			} else {
				// blank cell (no tutes)
				content.push(
					<div className="bg-theme-white hover:bg-stone-300 rounded-md h-7">
						<div className="h-7 w-full border-black border border-opacity-30"></div>
					</div>
				);
			}
		}
		return content;
	}

	// renders tuteblocks (right side bar things)
	const tuteBlocks = () => {
		return tutes.map(tute => 						
			<div className="bg-alt-green rounded-md p-2 pb-5 mb-2 text-xs">
				<p>Brass Lab J17 305</p>
				<p>13/25 (Weeks 1-5, 7-10)</p>
			</div>
		);
	}

	//updates data if cell is selected/deselected
	const updateTutes = (value:number) => {
    console.log(value);
		if (tutes.includes(value)) {
			setTutes(tutes.filter(tutes => tutes != value));
		} else {
			setTutes(tutes => [...tutes, value]);
		}
	}


	/**
	 * updates the user's data by overwriting the tutes array
	 */
	const saveData = async() => {
		try {
			if (user) {
				const userRef = doc(db, "users", user.uid);
				updateDoc(userRef, {tutes: tutes});
				navigate('/profile/details/edit');
			}
		} catch (e) {
			alert(e);
		}
	}

	return (
		<PageTemplate showYellowBg={false}>
			<div className="flex justify-center items-center w-full h-screen bg-theme-black">
				<div className="absolute container h-3/4 w-8/12 justify-center shadow-lg empty:bg-theme-white -rotate-3"></div>
				<div className=" overflow-auto absolute container h-3/4 w-8/12 drop-shadow-lg bg-theme-white p-6">
					<div className="flex h-full w-full">

						<div className="grid w-1/12 grid-cols-1 leading-6 h-fit text-center text-xs">
							<div className="bg-theme-white rounded-lg"><div className="h-6"></div></div>
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

				<div className="relative top-1/3 bg-theme-cream w-fit h-fit px-4 rounded-full shadow-md items-center">
					<button 
						onClick={() => saveData()}
						className="relative bg-theme-blue hover:bg-theme-yellow p-4 rounded-full shadow-md m-2">
						< img src={tick} alt="save" width="30"/>
					</button>
					<button
						onClick={() => navigate('/profile/details/edit')}
						className="relative bg-theme-red hover:bg-theme-yellow p-4 rounded-full shadow-md m-2">
						< img src={cross} alt="cancel" width="30"/>
					</button>
				</div>
			</div>
		</PageTemplate>
	);
}

export default TuteSelector;