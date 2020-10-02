import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    radius: 150,
    animationRunning: false,
    animationForward: true
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_CIRCLE_RADIUS':
            return {
                ...state,
                radius: action.payload
            }
        case 'SET_ANIMATION_RUNNING':
            return {
                ...state,
                animationRunning: action.payload
            }
        case 'SET_ANIMATION_FORWARD':
            return {
                ...state,
                animationForward: action.payload
            }
        default:
            return state
    }
}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store
