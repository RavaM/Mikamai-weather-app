import { createSlice, nanoid } from '@reduxjs/toolkit';

export const searchesSlice = createSlice({
  name: 'searches',
  initialState: {
    value: []
  },
  reducers: {
    addSearch: {
      reducer(state, action) {
        state.value.unshift(action.payload);
      },
      prepare(searchesData) {
        return {
          payload: { ...searchesData, id: nanoid() }
        }
      }
    },
    deleteSearch: (state, action) => {
      return {
        value: state.value.filter(el => el.id !== action.payload)
      }
    }
  }
})

export const { addSearch, deleteSearch } = searchesSlice.actions

export default searchesSlice.reducer