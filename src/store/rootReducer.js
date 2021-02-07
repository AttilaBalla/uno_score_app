import {combineReducers} from "redux";
import {gameManagerReducer} from "store/gameManagerReducer";
import {userInterfaceReducer} from "store/userInterfaceReducer";

export const rootReducer = combineReducers({
    gameData: gameManagerReducer,
    userInterface: userInterfaceReducer
})