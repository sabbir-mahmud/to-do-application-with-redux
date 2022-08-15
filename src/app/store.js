import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { taskApi } from '../hooks/tasks';
import modalReducer from '../hooks/updateTaskSlice';

export const store = configureStore({
  reducer: {
    updateTaskModal: modalReducer,
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskApi.middleware),
});

setupListeners(store.dispatch)
