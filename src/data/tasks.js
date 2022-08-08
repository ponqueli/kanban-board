import { STATUS_ENUM, CATEGORIES_ENUM } from "../constants/enums";

const mockTasks = [
  {
    id: "2fab1909-0b9f-4783-976c-4ffecb805ac5",
    title: 'Reset password button not working',
    description: 'The button does not contain any feedback, when you click on it, it does nothing',
    category: CATEGORIES_ENUM.BUG,
    status: STATUS_ENUM.DOING,
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    hidden: false,
  },
  {
    id: '1',
    title: 'Create clear filters button',
    description: 'The user can select the filters but they should also be able to clear them without having to reload the page',
    category: CATEGORIES_ENUM.FEATURE,
    status: STATUS_ENUM.BACKLOG,
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    hidden: false,
  },
  {
    id: '2',
    title: 'Set up the staging environment',
    description: '',
    category: CATEGORIES_ENUM.INFRA,
    status: STATUS_ENUM.BACKLOG,
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    hidden: false,
  },
  {
    id: '3',
    title: 'Send first deploy to prod',
    description: '',
    category: CATEGORIES_ENUM.REFACTOR,
    status: STATUS_ENUM.BACKLOG,
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    hidden: false,
  },
  {
    id: "74d031c0-59bb-4f4b-9910-71bb1c88c624",
    title: 'Create landing page',
    description: '',
    category: CATEGORIES_ENUM.FEATURE,
    status: STATUS_ENUM.DONE,
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    hidden: false,
  },
  {
    id: 'a04170d8-5f03-4a97-bbd7-cbc9516d0840',
    title: 'Make the onDragEnd function more efficient',
    description: '',
    category: CATEGORIES_ENUM.REFACTOR,
    status: STATUS_ENUM.TO_DO,
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    hidden: false,
  }
];

export default mockTasks;