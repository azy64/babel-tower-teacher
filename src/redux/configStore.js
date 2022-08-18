// import { createStore, applyMiddleware, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import lessonReducer from './lessons/lessonsReducer';
import loginReducer from './login/loginSlice';
// import continentsReducer, { fetchContinents } from './continents/continentsReducer';

/* const reducer = combineReducers({
  lessonReducer, loginReducer,
});
*/
const store = configureStore({
  reducer: {
    lesson: lessonReducer,
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// store.dispatch(fetchContinents());
// store.dispatch(fetchCountries());
export default store;
