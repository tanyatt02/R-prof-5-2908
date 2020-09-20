import update from 'react-addons-update';
import {ON_USERNAME_CHANGE, SET_USER} from "../actions/welcomeActions";

const initialState = {
    currentUser: null,
    userName: '',
    loggedIn: false
};

export const welcomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return update(state, {
                currentUser: {
                    $set: state.userName
                },
                loggedIn: {
                    $set: true
                }
            });

        case ON_USERNAME_CHANGE:
            return update(state, {
                userName: {
                    $set: action.newText
                }
            })

        default:
            return state
    }
}