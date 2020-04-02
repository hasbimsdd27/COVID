import {ADD_ANSWER, RESET_ANSWER} from '../config/constant';

export const addAnswer = (question, answer) => {
    console.log(question, answer);
    return {
        type: ADD_ANSWER,
        payload: {question, answer},
    };
};
export const resetAnswer = () => {
    return {
        type: RESET_ANSWER,
        payload: [],
    };
};
