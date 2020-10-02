import React from 'react';
import { Circle } from 'react-shapes';

import store from "./store";
import { setCircleRadius, setAnimationRunning, startAnimation } from "./actions"

import { Slider } from '@rmwc/slider';
import '@material/slider/dist/mdc.slider.css';

import './App.css';

const CIRCLE_MIN_RADIUS = 100
const CIRCLE_MAX_RADIUS = 220

function App({ state }: { state: any }) {
  const { radius } = state

  const handleStartAnimation = () => {
    store.dispatch(startAnimation())
  }

  const handleStopAnimation = () => {
    store.dispatch(setAnimationRunning(false))
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-controls">
          <div className="App-control-value">{radius}</div>
          <Slider className="circle-slider" min={CIRCLE_MIN_RADIUS} max={CIRCLE_MAX_RADIUS} value={radius} discrete step={1}
            onInput={(event) => {
              const newRadius = event.detail.value

              store.dispatch(setCircleRadius(newRadius))
            }}
          />
          <button onClick={handleStartAnimation}>Start animation</button>
          <button onClick={handleStopAnimation}>Stop animation</button>
        </div>
        <Circle r={radius} fill={{ color: 'rgba(0,0,0,0.5)' }} stroke={{ color: '#AA00FF' }} strokeWidth={5} />
      </header>
    </div>
  );
}

export default App;
