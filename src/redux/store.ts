import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {reducer} from './Reducer'

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(() => {
    const {favorites} = store.getState();
    localStorage.setItem("favs", JSON.stringify({favoriteCharacters:favorites}));
  });

