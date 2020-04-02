import {ADD_ANSWER, RESET_ANSWER} from '../config/constant';

const initialState = {
    data: [],
};

const ANSWER = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ANSWER:
            return {
                ...state,
                data: [...state.data, action.payload],
            };
        case RESET_ANSWER:
            return {
                ...state,
                data: [],
            };

        default:
            return state;
    }
};

export default ANSWER;
