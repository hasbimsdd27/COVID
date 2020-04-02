import {SUBMIT_DATA} from '../config/constant';

const initialState = {
    data: [],
    loading: false,
    error: false,
};

const ANSWER = (state = initialState, action) => {
    switch (action.type) {
        case `${SUBMIT_DATA}_PENDING`:
            return {
                ...state,
                loading: true,
            };
        case `${SUBMIT_DATA}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case `${SUBMIT_DATA}_REJECTED`:
            return {
                ...state,
                loading: false,
                error: true,
            };

        default:
            return state;
    }
};

export default ANSWER;
