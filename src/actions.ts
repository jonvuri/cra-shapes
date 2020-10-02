export const setCircleRadius = (radius: number) => ({
    type: 'SET_CIRCLE_RADIUS',
    payload: radius
})

export const setAnimationForward = (forward: boolean) => ({
    type: 'SET_ANIMATION_FORWARD',
    payload: forward
})

export const setAnimationRunning = (running: boolean) => ({
    type: 'SET_ANIMATION_RUNNING',
    payload: running
})

const CIRCLE_MIN_RADIUS = 100
const CIRCLE_MAX_RADIUS = 220
const TICK_FREQUENCY_MS = 50

const tickAnimation = () => (dispatch: any, getState: any) => {
    const { radius, animationRunning, animationForward } = getState()

    if (animationRunning) {
      if (animationForward) {
        if (radius < CIRCLE_MAX_RADIUS) {
          dispatch(setCircleRadius(radius + 1))
        } else {
          dispatch(setAnimationForward(false))
          dispatch(setCircleRadius(radius - 1))
        }
      } else {
        if (radius > CIRCLE_MIN_RADIUS) {
          dispatch(setCircleRadius(radius - 1))
        } else {
          dispatch(setAnimationForward(true))
          dispatch(setCircleRadius(radius + 1))
        }
      }

      setTimeout(() => {
        dispatch(tickAnimation())
      }, TICK_FREQUENCY_MS)
    }
}

export const startAnimation = () => (dispatch: any) => {
    dispatch(setAnimationRunning(true))
    dispatch(tickAnimation())
}
