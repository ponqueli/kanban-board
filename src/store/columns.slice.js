import { createSlice } from '@reduxjs/toolkit';
import { STATUS_ENUM } from '../constants/enums';
import mockColumns from '../data/columns';

const initialState = {
  columns: mockColumns,
  updatedColumns: undefined,
};

function getColumnsFromLocalStorage(){
  const columns = JSON.parse(localStorage.getItem('@GaiaTasksColumnsIds'));
  return columns ? columns : mockColumns;
};

export const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    getColumns: (state) => {
      state.columns = getColumnsFromLocalStorage();
    },
    setColumns: (state, action) => {
      state.columns = action.payload;

      localStorage.setItem(
        '@GaiaTasksColumnsIds',
        JSON.stringify(state.columns)
      );
    },
    updatedColumns: (state, action) => {
      
      const taskId = action.payload;
      const column = state.columns.find(
        (item) => item.id === STATUS_ENUM.BACKLOG
      );
      const columns = state.columns.filter(
        (item) => item.id !== STATUS_ENUM.BACKLOG
      );

      if (column) {
        const updatedColumn = {
          ...column,
          tasksIds: [taskId, ...column.tasksIds],
        };

        state.columns = [updatedColumn, ...columns];
      }

      localStorage.setItem(
        '@GaiaTasksColumnsIds',
        JSON.stringify(state.columns)
      );
    },
  },
});
export const { setColumns, updatedColumns, getColumns } = columnsSlice.actions;
export default columnsSlice.reducer;
