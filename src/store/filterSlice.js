import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchPage: {
    position: '',
    job_title: '',
    city: '',
    work_schedule: [],
    experience: {
      experience_from: '',
      experience_to: '',
      no_experience: false,
    },
  },
  filterPage: {
    region: '',
    schedule: '',
    profession: '',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilterState: (state, action) => {
      const { page, key, data } = action.payload;
      if (state[`${page}`][`${key}`] !== undefined) {
        state[`${page}`][`${key}`] = data;
      }
    },
  },
});

export const { updateFilterState } = filterSlice.actions;

export default filterSlice.reducer;
