const reducerPages = (state = 0, action) => {
    switch (action.type) {
        case 'NEXT':

            return state + 1

        default:
            return state
    }
}
export default reducerPages