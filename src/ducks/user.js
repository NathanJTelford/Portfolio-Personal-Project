const initialState = {
    teamOneScore: 0,
    teamTwoScore: 0,
}

const GET_SCORE_1 = 'GET_SCORE_1';
const GET_SCORE_2 = 'GET_SCORE_2';


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
    switch (action.type) {
    
        case GET_SCORE_1:
            return { ...state, teamOneScore: action.payload };

        case GET_SCORE_2:
            return { ...state, teamTwoScore: action.payload }



        default: return state;
    }
}
