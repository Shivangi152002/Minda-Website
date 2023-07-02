import {ResetButtonListeners} from "../Utils/TapButtons.js";
import {StartResultLayout} from './result.js'

const LAYOUT_NAME = "GAME";
const GAME_TIMER = "60";

let initialized;
let runtime;
let loginResponse;
let winId ;
let optName;
let resultEndTime;

function StartLayout(rntm, loginData, resultTime, winningId, opponentName)
{
	if(!initialized){
		initialized = true;
		runtime = rntm;
		loginResponse = loginData;
		runtime.getLayout(LAYOUT_NAME).addEventListener("afterlayoutstart", OnLayoutLoaded);
	}
	
	resultEndTime = resultTime;
	winId= winningId;
	optName = opponentName;
	
	runtime.goToLayout(LAYOUT_NAME);
}

const OnLayoutLoaded = function(){

// function changeToLandscape() {
//   if (screen.orientation && screen.orientation.lock) {
//     screen.orientation.lock('landscape');
//   } else if (screen.lockOrientation) {
//     screen.lockOrientation('landscape');
//   } else if (screen.mozLockOrientation) {
//     screen.mozLockOrientation('landscape');
//   } else if (screen.msLockOrientation) {
//     screen.msLockOrientation('landscape');
//   } else if (screen.orientation && screen.orientation.lock) {
//     screen.orientation.lock('landscape-primary');
//   }
// }

// changeToLandscape();
	ResetButtonListeners();
	
	setTimeout(()=>{
		//Game Over
		StartResultLayout(runtime, loginResponse, resultEndTime, winId , optName);
	}, GAME_TIMER * 1000)
}

export {StartLayout as StartGameLayout};