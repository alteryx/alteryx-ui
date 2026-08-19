import React from 'react';
import ReactDOM from 'react-dom';

global.IS_REACT_ACT_ENVIRONMENT = true;

// React 19 moved `act` onto the `react` package itself and deprecated the
// `react-dom/test-utils` copy; older React versions only have the latter.
const act = typeof React.act === 'function' ? React.act : require('react-dom/test-utils').act;

let ReactDOMClient;
try {
  // eslint-disable-next-line global-require
  ReactDOMClient = require('react-dom/client');
} catch (e) {
  ReactDOMClient = null;
}

export default function renderToContainer(element) {
  const container = document.createElement('div');
  document.body.appendChild(container);

  if (ReactDOMClient && typeof ReactDOMClient.createRoot === 'function') {
    const root = ReactDOMClient.createRoot(container);
    act(() => {
      root.render(element);
    });
  } else {
    act(() => {
      ReactDOM.render(element, container);
    });
  }

  return container;
}
