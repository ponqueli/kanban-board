import { STATUS_ENUM } from "../constants/enums";

const mockColumns = [
  {
    id: STATUS_ENUM.BACKLOG,
    title: 'Backlog',
    creatable: false,
    tasksIds: [],
    userId: undefined,
  },
  {
    id: STATUS_ENUM.TO_DO,
    title: 'To Do',
    creatable: true,
    tasksIds: [],
    userId: undefined,
  },
  {
    id: STATUS_ENUM.DOING,
    title: 'Doing',
    creatable: true,
    tasksIds: [],
    userId: undefined,
  },
  {
    id: STATUS_ENUM.IN_REVIEW,
    title: 'In Review',
    creatable: true,
    tasksIds: [],
    userId: undefined,
  },
  {
    id: STATUS_ENUM.DONE,
    title: 'Done',
    creatable: true,
    tasksIds: [],
    userId: undefined,
  }
]

export default mockColumns;