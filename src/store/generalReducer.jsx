import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  data: null,
  loggedin: false,
  token: null,
  eventState: false,
};

export const generalReducer = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setLoading: (state, action) => ({ ...state, loading: action.payload }),
    setError: (state, action) => ({ ...state, error: action.payload }),
    setData: (state, action) => ({ ...state, data: action.payload }),
    saveLoggedin: (state, action) => ({ ...state, loggedin: action.payload }),
    setToken: (state, action) => ({ ...state, token: action.payload }),
    setEventState: (state, action) => ({ ...state, eventState: action.payload }),
  },
});

export const { setLoading, setError, setData, saveLoggedin, setToken, setEventState } =
  generalReducer.actions;

export default generalReducer.reducer;
