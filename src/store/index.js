import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './TasksSlice';

const store = configureStore({
	reducer: {
		tasks: tasksReducer,
	},
});

export default store;