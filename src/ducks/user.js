const initialState = {
    email: '',
    password: '',
    game: {},
    teamOneScore: 0,
    teamTwoScore: 0
}

const GET_USER_DATA = 'GET_USER_DATA';
const GET_GAME_DATA = 'GET_GAME_DATA';
const GET_SCORE_DATA = 'GET_SCORE_DATA';
const GET_FIELD_CODE = 'GET_FIELD_CODE';
const GET_EMAIL = 'GET_EMAIL';
const GET_PASSWORD = 'GET_PASSWORD';
const GET_SCORE_1 = 'GET_SCORE_1';
const GET_SCORE_2 = 'GET_SCORE_2';


export function getUserData(userInfo) {
    return {
        type: GET_USER_DATA,
        payload: userInfo
    }
}

export function getGameData(gameInfo) {
    return {
        type: GET_GAME_DATA,
        payload: gameInfo
    }
}

export function getScoreData(scoreInfo) {
    return {
        type: GET_SCORE_DATA,
        payload: scoreInfo
    }
}

export function getFieldCode(code) {
    return {
        type: GET_FIELD_CODE,
        payload: code
    }
}

export function getEmail(email) {
    return {
        type: GET_EMAIL,
        payload: email
    }
}

export function getPassword(password) {
    return {
        type: GET_PASSWORD,
        payload: password
    }
}

export function teamOneScore(teamOneInfo) {
    return {
        type: GET_SCORE_1,
        payload: teamOneInfo
    }
}

export function teamTwoScore(teamTwoInfo) {
    return {
        type: GET_SCORE_2,
        payload: teamTwoInfo
    }
}



export default function reducer(state = initialState, action) {
    console.log(action.payload)
    switch (action.type) {
        case GET_USER_DATA:
            return { ...state, user: action.payload };

        case GET_GAME_DATA:
            return { ...state, game: action.payload };

        case GET_SCORE_DATA:
            return { ...state, score: action.payload };

        case GET_FIELD_CODE:
            return { ...state, fieldCode: action.payload };

        case GET_EMAIL:
            return { ...state, email: action.payload };

        case GET_PASSWORD:
            return { ...state, password: action.payload };

        case GET_SCORE_1:
            return { ...state, teamOneScore: action.payload };

        case GET_SCORE_2:
            return { ...state, teamTwoScore: action.payload }



        default: return state;
    }
}
