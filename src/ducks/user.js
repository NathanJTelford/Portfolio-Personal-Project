const initialState = {
    user: {},
    gameName: {},
    periods: [],
    team1: {},
    team2: {},
    points: []
}

const NUM_OF_PERIODS = 'NUM_OF_PERIODS'
const GET_USER_DATA = 'GET_USER_DATA';
const GAME_NAME = 'GAME_NAME';
const POINT_VALUES = 'POINT_VALUES';
const TEAM_NAME_1 = 'TEAM_NAME_1';
const TEAM_NAME_2 = 'TEAM_NAME_2'

export function getUserData(userInfo) {
    return {
        type: GET_USER_DATA,
        payload: userInfo
    }
}

export function numOfPeriods(periods) {
    return {
        type: NUM_OF_PERIODS,
        payload: periods
    }
}

export function gameName(gameName) {
    return {
        type: GAME_NAME,
        payload: gameName
    }
}

export function teamName1(teamName1) {
    return {
        type: TEAM_NAME_1,
        payload: teamName1
    }
}

export function teamName2(teamName2) {
    return {
        type: TEAM_NAME_2,
        payload: teamName2
    }
}

export function pointValues(pointValue) {
    return {
        type: POINT_VALUES,
        payload: pointValue
    }
}


export default function reducer(state = initialState, action) {
    console.log('reducer', action.payload)

    switch (action.type) {
        case GET_USER_DATA:
            return { ...state, user: action.payload };

        case GAME_NAME:
            return { ...state, gameName: action.payload };

        case TEAM_NAME_1:
            return { ...state, teamName1: action.payload };

        case TEAM_NAME_2:
            return { ...state, teamName2: action.payload };

        case POINT_VALUES:
            return { ...state, points: action.payload };

        case NUM_OF_PERIODS:
            return { ...state, periods: action.payload };


        default: return state;
    }
}