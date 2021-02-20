import {actions} from "store/actions";

const initialState = {
    maxPoints: 500,
    players: [
        {
            id: 0,
            name: 'Player 1',
            points: [
                234,
                32
            ]
        },
        {
            id: 1,
            name: 'Player 2',
            points: [
                89,
                null
            ]
        },
        {
            id: 2,
            name: 'New Player',
            points: [
                23,
                45
            ]
        },
        {
            id: 3,
            name: 'New Player',
            points: [
                67,
                67
            ]
        },
        {
            id: 4,
            name: 'New Player',
            points: [
                null,
                91
            ]
        },
        {
            id: 5,
            name: 'New Player',
            points: [
                389,
                12
            ]
        }
    ]
};

export const gameManagerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.player.ADD_PLAYER:
            return {...state, players: [...state.players, action.data]};
        case actions.player.REMOVE_PLAYER:
            return removePlayer(state, action.data.id);
        case actions.player.UPDATE_RESULTS:
            return updatePoints(state, action.data.roundResults);
        case actions.player.RENAME_PLAYER:
            return renamePlayer(state, action.data);
        case actions.settings.UPDATE_MAX_POINTS:
            return updateMaxPoints(state, action.data);
        case actions.settings.CLEAR_POINTS:
            return clearPoints(state);
        case actions.settings.CLEAR_DATA:
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

const updatePoints = (state, roundResults) => {
    let {players} = state;

    for (let player of players) {
        player.points.push(parseInt(roundResults[player.id]) || null);
    }

    return {...state, players: players};
};

const updateMaxPoints = (state, newMaxPoints) => {
    console.log(newMaxPoints);
    return {
        ...state,
            maxPoints: newMaxPoints
    }
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
