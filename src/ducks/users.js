import axios from 'axios';

const initialState = {
    user: {}
}

const GET_USER_INFO = 'GET_USER_INFO'

export function getUserInfo() {
    let userData = axios.get('/auth/me').then(response => {
        console.log(response.data)
        return response.data;
    })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}


export default function reducer(state = initialState, action) {     //this is invoke any time an action is passed to the store
    switch(action.type) {                                              //TWO PIECES OF INFO PASSED IN ARE: action, state
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload}) //order is important here
        default:
        return state;
    }                                               
}