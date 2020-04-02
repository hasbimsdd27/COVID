import {SUBMIT_DATA} from '../config/constant';
import {API} from '../config/api';

export const submitData = data => {
    console.log(data);
    return {
        type: SUBMIT_DATA,
        // payload: async () => {
        //     const res = await API.post('/login', data);
        //     return res.data;}
    };
};
