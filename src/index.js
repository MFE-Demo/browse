import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store, persistor } from "./Redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { unregister } from "./serviceWorker";

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
