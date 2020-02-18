import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store, persistor } from "./Redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { unregister } from "./serviceWorker";

//Setting a unique ID to this micro app, "Browse". This will be used to help our container app find and render this micro frontend. Ex; window[`render${name}`](`${name}-container`, history);

//With React.js apps, as soon as a script file is loaded, it immediately begins rendering into a DOM element. For this app, we need to be able to control when and where rendering happens. To do this, we wrap the application in a function that receives the DOM element's ID as a param and then attacch that function to the global window object.

window.renderBrowse = (containerId, history) => {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App history={history} />
      </PersistGate>
    </Provider>,
    document.getElementById(containerId)
  );
  unregister();
};

window.unmountBrowse = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
