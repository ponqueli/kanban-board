import { createSlice } from "@reduxjs/toolkit";
import mockTasks from "../data/tasks";

const initialState = {
  tasks: mockTasks,
  searchText: ''
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    updateTask: (state, action) => {
      const taskId = action.payload.id;

      const updatedTasks = state.tasks.map(task => {
        if(task.id === taskId) return action.payload;
        return task;
      });

      state.tasks = updatedTasks;
    },
    filterTasks: (state, action) => {
      const searchText = state.searchText;
      const categories = action.payload.categories;

      const filteredTasks = [...state.cards]
        .map(task => {
          if(searchText.length > 0){
            if(task.title.toUpperCase()
              .includes(searchText.toUpperCase()) && categories
              .includes(task.category)
              ) return {...task, hidden: false};
          } else {
            if(categories.includes(task.category)) return {...task, hidden: false};
          }
          return {...task, hidden: true};

        }
      );

      state.tasks = filteredTasks;
    },
    clearFilters: (state, action) => {
      state.tasks = [...state.tasks].map(task => {
        return {...task, hidden: false};
      });
    }
  }
});

export const {
  setTasks,
  setSearchText,
  updateTask,
  addTask,
  filterTasks,
  clearFilters
} = tasksSlice.actions;

export default tasksSlice.reducer;