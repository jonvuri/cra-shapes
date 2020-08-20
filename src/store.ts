import { createStore } from 'redux'

const reducer = (state = { radius: 150 }, action: any) => {
    switch (action.type) {
        case 'SET_CIRCLE_RADIUS':
            return {
                ...state,
                radius: action.payload
            }
        default:
            return state
    }
}

const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__

const store = createStore(
    reducer,
    devTools && devTools()
)

export default store
