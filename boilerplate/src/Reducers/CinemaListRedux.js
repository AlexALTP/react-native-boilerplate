import {createSlice} from '@reduxjs/toolkit';

const cinemaList = createSlice({
  name: 'CINEMA_LIST',
  initialState: {
    isFetching: false,
    statusType: void 0,
    statusText: '',
    items: [],
  },
  reducers: {
    requestCinemaList(state) {
      return state.merge({
        isFetching: true,
        statusType: void 0,
        statusText: '',
      });
    },
  },
});

export const {requestCinemaList} = cinemaList.actions;

export const INITIAL_STATE = cinemaList.initialState;

export default cinemaList.reducer;
