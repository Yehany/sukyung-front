import { createSlice } from '@reduxjs/toolkit';

export interface StoreState {
  value: number;
  isLoading: boolean;
  token: string | null;
}

export const initialState: StoreState = {
  value: 0,
  isLoading: false,
  token: null,
};

export const store = createSlice({
  name: 'stateStore',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setValue, setLoading, setToken } = store.actions;
export default store.reducer;
