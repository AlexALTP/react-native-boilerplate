import {combineReducers} from 'redux';

import cinemaList from './CinemaListRedux';

const rootReducer = combineReducers({
  cinemaList,
});

export default rootReducer;
