const reducerPages = (state = 'home', action) => {
    switch (action.type) {
        case 'SWITCH':

            return action.page

        default:
            return state
    }
}
export default reducerPages