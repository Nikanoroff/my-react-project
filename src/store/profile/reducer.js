import { EXAMPLE_ACTIONS } from "./actions"


const initialState = {
    showName: false,
    name: 'Bill'
}


const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case EXAMPLE_ACTIONS:
            return {
                ...state,
                showName: !state.showName
            }

        default:
            return state
    }
}

export default profileReduser