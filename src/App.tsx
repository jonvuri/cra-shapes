import React, { useState } from 'react';
import { Circle } from 'react-shapes';

import { Slider } from '@rmwc/slider';
import '@material/slider/dist/mdc.slider.css';

import './App.css';

function App() {
  const [radius, setRadius] = useState(150)

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-controls">
          {radius}
          <Slider className="circle-slider" min={20} max={500} value={radius} discrete step={1}
            onInput={(event) => {
              const newRadius = event.detail.value

              setRadius(newRadius)
            }}
          />
        </div>
        <Circle r={radius} fill={{ color: 'rgba(0,0,0,0.5)' }} stroke={{ color: '#AA00FF' }} strokeWidth={5} />
      </header>
    </div>
  );
}

export default App;
