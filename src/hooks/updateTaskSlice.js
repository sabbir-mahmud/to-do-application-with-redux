import { createSlice } from '@reduxjs/toolkit'
export const updateTaskModalSlice = createSlice({
 name: 'is_modal',
 initialState: {
  value: false,
  id: ''
 },
 loading: false,
 reducers: {
  openModal: (state, action) => {
   state.value = true
   state.id = action.payload
  },
  closeModal: (state) => {
   state.value = false
   state.id = ''
  }
 }
})

export const { openModal, closeModal } = updateTaskModalSlice.actions
export default updateTaskModalSlice.reducer