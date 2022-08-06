import { configureStore } from '@reduxjs/toolkit';

import columnsReducer from './columns';
import tasksReducer from './tasks';

export const store = configureStore({
  reducer: {
    columns: columnsReducer,
    tasks: tasksReducer,
  },
});