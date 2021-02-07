import {actions} from "store/actions";

const initialState = {
    maxPoints: 500,
    players: [],
};

export const gameManagerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_PLAYER:
            return {...state, players: [...state.players, action.data]};
        case actions.REMOVE_PLAYER:
            return removePlayer(state, action.data.id);
        case actions.ADD_POINTS:
            return addPointsToPlayer(state, action.data);
        case actions.UPDATE_POINTS:
            return updatePoints(state, action.data.roundResults);
        case actions.RENAME_PLAYER:
            return renamePlayer(state, action.data);
        case actions.UPDATE_SETTINGS:
            return {...state, cardsPerRow: action.data.cardsPerRow, maxPoints: action.data.maxPoints};
        case actions.CLEAR_POINTS:
            return clearPoints(state);
        case actions.CLEAR_DATA:
            return clearData(state);
        default:
            return state;
    }
};

const removePlayer = (state, playerId) => {
    let {players} = state;
    let filteredPlayersList = players.filter((player) => {
        return player.id !== playerId
    });

    return {...state, players: filteredPlayersList}
};

const renamePlayer = (state, playerData) => {
    const {id, name} = playerData;
    let {players} = state;

    for (let player of players) {
        if (player.id === id) {
            player.name = name;
        }
    }

    return {...state, players: players};
}

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

const updatePoints = (state, roundResults) => {
    console.log(roundResults);
    let {players} = state;
    
    for (let player of players) {
        player.points.push(parseInt(roundResults[player.id]) || null);    
    }
    
    return {...state, players: players};
}

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
