import { STATUS_ENUM } from "../constants/enums";

const mockColumns = [
  {
    id: STATUS_ENUM.BACKLOG,
    title: 'Backlog',
    creatable: false,
    tasksIds: [
      '5be53f27-a69c-4128-bf40-86cd572267a5', 
      '6ed5a4b0-1e2c-4b71-ab42-e740f02da496', 
      '55cac86b-c223-4eed-992a-e231e9232d42',
      '2fab1909-0b9f-4783-976c-4ffecb805ac5'
    ]
  },
  {
    id: STATUS_ENUM.TO_DO,
    title: 'To Do',
    creatable: true,
    tasksIds: ['a04170d8-5f03-4a97-bbd7-cbc9516d0840']
  },
  {
    id: STATUS_ENUM.DOING,
    title: 'Doing',
    creatable: true,
    tasksIds: ['2fab1909-0b9f-4783-976c-4ffecb805ac5']
  },
  {
    id: STATUS_ENUM.IN_REVIEW,
    title: 'In Review',
    creatable: true,
    tasksIds: ['32eb3393-eddc-487a-abc3-1c199b86c4a2']
  },
  {
    id: STATUS_ENUM.DONE,
    title: 'Done',
    creatable: true,
    tasksIds: ['29065b36-8873-4ccd-8c42-dcff14736650', '74d031c0-59bb-4f4b-9910-71bb1c88c624']
  }
]

export default mockColumns;