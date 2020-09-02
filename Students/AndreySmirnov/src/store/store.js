const store = {
    _state: {
        messages: [],
        newMessageText: ''
    },

    _callSubscriber(){
        console.log('Here will be our rerender function after first render')
    },

    subscribe(observer){
        this._callSubscriber = observer
    },

    getState(){
        return this._state
    },

    dispatch(action){
        switch (action.type) {
            case 'ADD_MESSAGE':
                if (this._state.newMessageText.length===0){
                    break
                }

                const lastMessage = this._state.messages[this._state.messages.length - 1]
                this._state.messages.push({
                    id: lastMessage ? lastMessage.id + 1 : 0,
                    text: this._state.newMessageText
                })
                this._state.newMessageText = ''
                this._callSubscriber()
                break

            case 'UPDATE_NEW_MESSAGE_TEXT':
                this._state.newMessageText = action.text
                this._callSubscriber()
                break
        }
    }

}

export default store