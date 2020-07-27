import React, {createContext, useReducer} from 'react';
import {actions} from "./actions";

const initialState = {
    maxPoints: 500,
    cardsPerRow: 2,
    players: [
        {
            id: 0,
            name: "Atti",
            points: []
        },
    ]
};
const gameDataStore = createContext(initialState);
const {Provider} = gameDataStore;

const GameManager = ({children}) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case actions.ADD_PLAYER:
                return {...state, players: [...state.players, action.data]};
            case actions.ADD_POINTS:
                return addPointsToPlayer(state, action.data);
            default:
                throw new Error();
        }
    }, initialState);

    return <Provider value={{state, dispatch}}>{children}</Provider>;
};

const addPointsToPlayer = (state, playerData) => {

    const { id, points } = playerData;
    let { players } = state;

    for (let player of players) {
        if(player.id === id) {
            player.points = points;
        }
    }

    return {...state, players: players};
};

export {gameDataStore, GameManager}