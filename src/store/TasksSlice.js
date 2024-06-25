import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
	tasks: [],
	count: 0,
};

const tasksSlice = createSlice({
	name: 'tasks',
	initialState: INITIAL_STATE,
	reducers: {
		addTask: (state, action) => {
			state.tasks.push({ ...action.payload, createdAt: Date.now(), isDone: false });
			state.count = state.tasks.length;
		},
		removeTask: (state, action) => {
			state.tasks.splice(+action.payload, 1);
			state.count = state.tasks.length;
		},
		editTask: (state, action) => {
			const editedTasks = state.tasks.map((task, index) => {
				if (index === action.payload.taskIndex) {
					task = { ...task, ...action.payload.task };
				}
				return task;
			});
			return {
				tasks: editedTasks,
				count: editedTasks.length,
			};
		},
		toggleTaskIsDone: (state, action) => {
			const editedTasks = state.tasks.map((task, index) => {
				if (index === action.payload.taskIndex) {
					task = { ...task, isDone: action.payload.isDone };
				}
				return task;
			});
			return {
				tasks: editedTasks,
				count: editedTasks.length,
			};
		},
	},
});

export const { addTask, removeTask, editTask, toggleTaskIsDone } = tasksSlice.actions;

export default tasksSlice.reducer;