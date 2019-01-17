const initialState = {
    user: {},
    gameName: '',
    periods: 0,
    team1: '',
    team2: '',
    concatPoints: [],
    scoreType: '',
    scoreValue: 0
}

const GET_USER_DATA = 'GET_USER_DATA';
const GAME_NAME = 'GAME_NAME';
const NUM_OF_PERIODS = 'NUM_OF_PERIODS'
const TEAM_NAME_1 = 'TEAM_NAME_1';
const TEAM_NAME_2 = 'TEAM_NAME_2';
const SCORE_TYPE = 'SCORE_TYPE'
const SCORE_VALUE = 'SCORE_VALUE'
const CONCAT_SCORE = 'CONCAT_SCORE';


export function GetUserData(userInfo) {
    return {
        type: GET_USER_DATA,
        payload: userInfo
    }
}
export function updateGameName(gameName) {
    return {
        type: GAME_NAME,
        payload: gameName
    }
}

export function updateNumOfPeriods(periods) {
    return {
        type: NUM_OF_PERIODS,
        payload: periods
    }
}


export function updateTeamName1(teamName1) {
    return {
        type: TEAM_NAME_1,
        payload: teamName1
    }
}

export function updateTeamName2(teamName2) {
    return {
        type: TEAM_NAME_2,
        payload: teamName2
    }
}


export function updateScoreType(scoreType) {
    return {
        type: SCORE_TYPE,
        payload: scoreType
    }
}

export function updateScoreValue( scoreValue) {
    return {
        type: SCORE_VALUE,
        payload:  scoreValue
    }
}

export function updateConcatPoints(scoreType, scoreValue) {
    return {
        type: CONCAT_SCORE,
        payload: [...[], scoreType, scoreValue]
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

        case NUM_OF_PERIODS:
            return { ...state, periods: action.payload };

        case CONCAT_SCORE:
            return { ...state, concatPoints: action.payload }


        default: return state;
    }
}


