const reducerAdminLogin = (state = { isAdmin: false }, action) => {
    switch (action.type) {
        case 'ADMINLOGIN':

            return { ...state, isAdmin: true }
        case 'ADMINLOGOUT':
            localStorage.removeItem('adminToken')

            return { ...state, isAdmin: false }
        default:
            return state
    }
}
export default reducerAdminLogin