import { createSlice } from '@reduxjs/toolkit';
import { STATUS_ENUM } from '../constants/enums';
import mockColumns from '../data/columns';
import { client, q } from '../services/fauna';
import { gapi } from 'gapi-script';

const initialState = {
  columns: mockColumns,
  updatedColumns: undefined,
};

async function getColumnsByUserFromDB(){
  //get gmail user profile data
  const auth = gapi.auth2.getAuthInstance();
  const profile = auth.currentUser.get().getBasicProfile();
  let allColumns = [];
  try {
    let allColumnsByUser = await client.query(
      q.Map(
        q.Paginate(q.Match(q.Index('columns_by_user_ref'), q.Casefold(profile.getEmail()))),
        q.Lambda(x => q.Get(x))
      )
    );

    //create an array of all columns to return using reduce method
    allColumns = allColumnsByUser.data.reduce((acc, column) => {
      acc.push(column.data);
      return acc;
    }, []);

  } catch (error) {
    if (error.requestResult.statusCode === 404) {
      console.log('Columns were not created ');
    }
  }

  return allColumns;
};

export const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    getColumns: async (state)  => {
      state.columns = await getColumnsByUserFromDB();
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
    deleteTaskFromColumns: (state, action) => {
      const taskId = action.payload;
      const columns = state.columns.map((column) => {
        const tasksIds = column.tasksIds.filter((id) => id !== taskId);
        return { ...column, tasksIds };
      });

      state.columns = columns;

      localStorage.setItem(
        '@GaiaTasksColumnsIds',
        JSON.stringify(state.columns)
      );
    }
  },
});
export const { setColumns, updatedColumns, getColumns, deleteTaskFromColumns } = columnsSlice.actions;
export default columnsSlice.reducer;
