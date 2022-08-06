import { configureStore } from '@reduxjs/toolkit';

import columnsReducer from './columns.slice';
import tasksReducer from './tasks.slice';

const store = configureStore({
  reducer: {
    columns: columnsReducer,
    tasks: tasksReducer,
  },
});

export default store;