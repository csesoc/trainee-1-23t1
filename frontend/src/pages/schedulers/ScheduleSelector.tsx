import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { User } from "firebase/auth";

import PageTemplate from '../../components/PageTemplate';
import cross from '../../assets/cross.svg';
import tick from '../../assets/tick.svg';
import { showTime, weekDays } from '../../components/Timetable';

const ScheduleSelector = () => {
	const navigate = useNavigate();
	const[user, setUser] = useState<User | null>(null);
	const [data, setData] = useState<Number[]>([]);

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
					if (userSnap.data().times) {
						setData(userSnap.data().times);
					} else {
						setData([]);
						updateDoc(userRef, {times: []});
					}
				} else {
					setData([]);
				}
			}
		} catch (e) {
			alert(e);
		}
	};

	// renders cells
	const showCells = () => {
		let content = [];
		for (let i = 0; i < 112; i++) {
			if (data.includes(i)) {
				// coloured cell
				content.push(
					<div className="bg-theme-white hover:bg-stone-300 rounded-md h-7">
						<button 
							onClick={() => updateData(i)} 
							className="h-7 w-full border-black border border-opacity-30 bg-theme-yellow hover:bg-opacity-50"></button>
					</div>
				);
			} else {
				// blank cell
				content.push(
					<div className="bg-theme-white hover:bg-stone-300 rounded-md h-7">
						<button 
							onClick={() => updateData(i)} 
							className="h-7 w-full border-black border border-opacity-30"></button>
					</div>
				);
			}
		}
		return content;
	}

	//updates data if cell is selected/deselected
	const updateData = (value:number) => {
		if (data.includes(value)) {
			setData(data.filter(item => item != value));
		} else {
			setData(data => [...data, value]);
		}
	}

	const saveData = () => {
		try {
			if (user) {
				const userRef = doc(db, "users", user.uid);
				updateDoc(userRef, {times: data});
				navigate('/');
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
							<div className="bg-theme-white rounded-lg hover:bg-theme-yellow"><div className="h-6"></div></div>
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

				<div className="relative top-1/3 bg-theme-cream w-fit h-fit px-4 rounded-full shadow-md items-center">
					<button 
						onClick={() => saveData()}
						className="relative bg-theme-blue hover:bg-theme-yellow p-4 rounded-full shadow-md m-2">
						< img src={tick} alt="save" width="30"/>
					</button>
					<button
						onClick={() => navigate('/')}
						className="relative bg-theme-red hover:bg-theme-yellow p-4 rounded-full shadow-md m-2">
						< img src={cross} alt="cancel" width="30"/>
					</button>
				</div>
				
			</div>
		</PageTemplate>
	);
}

export default ScheduleSelector;