import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { persistReducer,persistStore } from 'redux-persist';
import { combineReducers,compose,createStore,applyMiddleware} from 'redux';
import Reducer from  './store/Reducres/Reducer'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import App from './App';
import './index.css'
import reportWebVitals from './reportWebVitals';
let composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const RooteReducers=combineReducers({
  TestData:Reducer
})
const persistConfig={
  key:"root",
  storage,
  blacklist:[""]
}
const Preducer=persistReducer(persistConfig,RooteReducers)
const store=createStore(Preducer,composeEnhancers(applyMiddleware(thunk)))
const persistor=persistStore(store)
export {persistor,store}
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();