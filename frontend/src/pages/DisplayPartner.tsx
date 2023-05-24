import cross from '../assets/cross.svg';
import tick from '../assets/tick.svg';
import { tempUser, tempUser2 } from './schedulers/tempData';
import defaultPfp from "../assets/tempPfp.jpeg"

export default function DisplayPartner() {

  // CHANGE THIS
  const getUser = () => {
    return tempUser;
  }

  const user = getUser();

  const getTutes = () => {
    return user.prefTute.map(tute => 
      <div className="bg-theme-yellow h-fit pb-8 rounded-md m-4 text-xs drop-shadow-md p-2">
        <p>{tute.time}</p>
        <p>{tute.location}</p>
      </div>
    );
  }

  const getTimes = () => {
    let content = [];
    for (let i = 0; i < 112; i++) {
      if (user.availability.get(i) == 1) {
        content.push(
          <div className="bg-alt-green w-full border-theme-black border-opacity-30 border"><div className="h-3"></div></div>
        )
      } else {
        content.push(
          <div className="bg-theme-white w-full border-theme-black border-opacity-30 border"><div className="h-3"></div></div>
        )
      }
    }
    return content;
  }

  return (
    <div className="flex justify-center items-center w-full h-screen bg-theme-black">
      <div className="absolute container h-3/4 w-8/12 justify-center shadow-lg empty:bg-theme-white -rotate-3"></div>
      <div className="absolute container h-3/4 w-8/12 justify-center items-center drop-shadow-lg bg-theme-white">
      
        <div className="relative container h-full w-full justify-center overflow-auto">

          <div className="flex flex-col md:flex-row justify-center items-stretch md:h-1/3 h-fit">
            <div className="flex flex-1 p-4 flex-col md:flex-row bg-gradient-to-r from-theme-dPink to-theme-yellow items-center overflow-auto">

              <div className="flex w-1/3 justify-center items-center">
                <img src={user.image ? user.image : defaultPfp} className="rounded-3xl object-cover h-24 w-24 object-center border-4 border-theme-lPink"></img>
              </div>

              <div className="flex-wrap w-2/3 md:text-left text-center m-2">
                <p className="text-xl font-bold">{user.nameFirst} {user.nameLast}</p>
                <p className="text-sm opacity-60">@{user.username}</p>
                <p className="text-sm">{user.bio}</p>
              </div>
              
            </div>

            <div className="bg-theme-yellow flex-1">
              <div className="flex bg-theme-black opacity-60 rounded-3xl flex-col md:flex-row items-center text-theme-lPink m-10">

                <div className="m-4 w-1/4 text-center">
                  <p className="text-xs">Hours pw: </p>
                  <p>{user.hrsPw}</p>
                </div>

                <div className="m-4 w-1/4 text-center">
                  <p className="text-xs">desired grade: </p>
                  <p>{user.grade}</p>
                </div>

                <div className="m-4 w-1/4 text-center">
                  <p className="text-xs">mbti: </p>
                  <p>{user.mbti}</p>
                </div>

                <div className="m-4 w-1/4 text-center">
                  <p className="text-xs">preferred platforms: </p>
                  <p>{user.platform}</p>
                </div>

              </div>
            </div>

          </div>

          <div className="flex flex-col md:flex-row justify-center items-stretch md:h-2/3 h-min pb-10">   
            <div className="bg-theme-white flex-1 p-4">
              <p className="font-bold text-theme-dPink">Preferred tute times: </p>

              <div className="container h-full overflow-scroll">
                {getTutes()}
              </div>

            </div>
            <div className="bg-theme-white flex-1 p-4">
              <p className="font-bold text-theme-dPink">Working time availability: </p>
              <div className="flex h-3/4 rounded-md m-4 overflow-scroll">
                <div className="grid grid-cols-7 w-full border-theme-black border-2">
                  {getTimes()}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="relative top-1/3 w-fit h-fit items-center">
				<button 
					className="relative bg-theme-blue hover:bg-theme-yellow p-4 rounded-full shadow-md m-2">
					<img src={tick} alt="save" width="30"/>
				</button>
				<button
					className="relative bg-theme-red hover:bg-theme-yellow p-4 rounded-full shadow-md m-2">
					<img src={cross} alt="cancel" width="30"/>
				</button>
			</div>
    </div>
  );
}