import React, {createContext, useReducer} from 'react';
import {actions} from "store/actions";
import {initialState} from "store/initialState";

const gameDataStore = createContext(initialState);
const {Provider} = gameDataStore;

// old context API based implementation, it shall stay here as an example
const GameManager = ({children}) => {
    const [state, dispatch] = useReducer((state, action) => {
        console.log(state);
        switch (action.type) {
            case actions.ADD_PLAYER:
                return {...state, players: [...state.players, action.data]};
            case actions.REMOVE_PLAYER:
                return removePlayer(state, action.data.id);
            case actions.ADD_POINTS:
                return addPointsToPlayer(state, action.data);
            case actions.UPDATE_SETTINGS:
                return {...state, cardsPerRow: action.data.cardsPerRow, maxPoints: action.data.maxPoints};
            case actions.CLEAR_POINTS:
                return clearPoints(state);
            case actions.CLEAR_DATA:
                return clearData(state);
            default:
                throw new Error(`The GameManager doesn't know what to do with this action: ${action.type}`);
        }
    }, initialState);

    return <Provider value={{state, dispatch}}>{children}</Provider>;
};

const removePlayer = (state, playerId) => {
    let {players} = state;
    let filteredPlayersList = players.filter((player, index, array) => {
        return player.id !== playerId
    });

    return {...state, players: filteredPlayersList}
};

const addPointsToPlayer = (state, playerData) => {
    const {id, points} = playerData;
    let {players} = state;

    for (let player of players) {
        if (player.id === id) {
            player.points = points;
        }
    }

    return {...state, players: players};
};

const clearPoints = (state) => {
    let {players} = state;

    for (let player of players) {
        player.points = []
    }

    return {...state, players: players}
};

const clearData = (state) => {
    return {...state, players: []}
};

export {gameDataStore, GameManager}