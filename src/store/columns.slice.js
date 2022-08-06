import { createSlice } from "@reduxjs/toolkit";
import { STATUS_ENUM } from "../constants/enums";
import mockColumns from "../data/columns";

const initialState = {
  columns: mockColumns,
  updatedColumns: undefined,
};

export const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    setColumns: (state, action) => {
      state.columns = action.payload;
    },
    updatedColumns: (state, action) => {
      const taskId = action.payload;
      const column = state.columns.find(item => item.id === STATUS_ENUM.BACKLOG);
      const columns = state.columns.filter(item => item.id !== STATUS_ENUM.BACKLOG);

      if(column) {
        const updatedColumn = {
          ...column,
          tasksIds: [...column.tasksIds, taskId], 
        }

        state.columns = [updatedColumn, ...columns];
      }
    }
  }
})
export const { setColumns, updatedColumns } = columnsSlice.actions;
export default columnsSlice.reducer;