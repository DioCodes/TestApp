import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { imageReducer } from './reducers/imageReducer';

const rootReducer = combineReducers({
  image: imageReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));
