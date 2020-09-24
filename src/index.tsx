import React from 'react';
import ReactDOM from 'react-dom';
import {ErrorBoundary, FallbackProps} from 'react-error-boundary';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./store";

function ErrorFallback({error, resetErrorBoundary}: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error?.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

const render = () => ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

store.subscribe(() => {
  render()
})

render()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
