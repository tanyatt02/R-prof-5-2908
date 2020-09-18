export const SET_USER = '@@welcome/SET_USER'
export const ON_USERNAME_CHANGE = '@@welcome/ON_USERNAME_CHANGE'

export const setUser = () => ({type: SET_USER})
export const onUserNameChange = (text) => ({type: ON_USERNAME_CHANGE, newText: text})