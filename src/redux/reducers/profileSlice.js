import { createSlice } from '@reduxjs/toolkit';
import dummyData from '../../utils/dummyData';
const initialState = {
  profiles: dummyData,
  selectedProfile: null,
  searchQuery: '',
  filterCriteria: '',
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    fetchProfiles(state, action) {
      state.profiles = action.payload;
      state.loading = false;
    },
    setLoading(state) {
      state.loading = true;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    selectProfile(state, action) {
      state.selectedProfile = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setFilterCriteria(state, action) {
      state.filterCriteria = action.payload;
    },
    addProfile(state, action) {
      state.profiles.push(action.payload);
    },
    editProfile(state, action) {
      const index = state.profiles.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.profiles[index] = action.payload;
      }
    },
    deleteProfile(state, action) {
       
      const index = state.profiles.findIndex((p) => p.id === action.payload);
      if (index !== -1) {
        state.profiles.splice(index, 1); // Remove profile by index
      }
    },
  },
});

export const {
  fetchProfiles,
  setLoading,
  setError,
  selectProfile,
  setSearchQuery,
  setFilterCriteria,
  addProfile,
  editProfile,
  deleteProfile,
} = profileSlice.actions;

export default profileSlice.reducer;
