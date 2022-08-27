import { createSlice } from '@reduxjs/toolkit';
import getTasksFromLocalStorage from '../data/tasks';
import { CATEGORIES_ENUM } from '../constants/enums';

const initialState = {
  tasks: getTasksFromLocalStorage(),
  searchText: '',
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    getTasks:(state) => {
      state.tasks = getTasksFromLocalStorage();
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
      localStorage.setItem('@GaiaTasks', JSON.stringify(state.tasks));
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    addTask: (state, action) => {
      const task = action.payload;
      state.tasks = [task, ...state.tasks];

      localStorage.setItem('@GaiaTasks', JSON.stringify(state.tasks));
    },
    updateTask: (state, action) => {
      const taskId = action.payload.id;

      const updatedTasks = state.tasks.map((task) => {
        if (task.id === taskId) return action.payload;
        return task;
      });

      state.tasks = updatedTasks;

      localStorage.setItem('@GaiaTasks', JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      const taskId = action.payload;
      const updatedTasks = state.tasks.filter((task) => task.id !== taskId);
      state.tasks = updatedTasks;

      localStorage.setItem('@GaiaTasks', JSON.stringify(state.tasks));
    },
    filterTasks: (state, action) => {
      const searchText = state.searchText;
      const categories = action.payload.categories || Object.values(CATEGORIES_ENUM);

      const filteredTasks = [...state.tasks].map((task) => {
        if (searchText.length > 0) {
          if (
            task.title.toUpperCase().includes(searchText.toUpperCase()) &&
            categories.includes(task.category)
          )
            return { ...task, hidden: false };
        } else {
          if (categories.includes(task.category))
            return { ...task, hidden: false };
        }
        return { ...task, hidden: true };
      });

      state.tasks = filteredTasks;
    },
    clearFilters: (state) => {
      const clearedFiltersTasks = state.tasks.map((task) => ({
        ...task,
        hidden: false,
      }));

      state.tasks = clearedFiltersTasks;
    },
  },
});

export const {
  setTasks,
  setSearchText,
  updateTask,
  addTask,
  filterTasks,
  clearFilters,
  deleteTask,
  getTasks,
} = tasksSlice.actions;

export default tasksSlice.reducer;
