import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    myNumber: 0
};

export const numberBoxSlice = createSlice({
  name: 'numberBox',
  initialState: initialState,
  reducers: {
    fetchMyNumber: (state, action) => {
      state.myNumber= action.payload;
    },

  },
 
});

export const {fetchMyNumber} = numberBoxSlice.actions;
export default numberBoxSlice;
