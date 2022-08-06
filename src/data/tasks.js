import { STATUS_ENUM, CATEGORIES_ENUM } from "../constants/enums";

const mockTasks = [
  {
    id: "5be53f27-a69c-4128-bf40-86cd572267a5",
    title: "Task 1",
    description: "Task 1 description",
    category: CATEGORIES_ENUM.BUG,
    status: STATUS_ENUM.DOING,
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    hidden: false,
  },
  {
    id: "6ed5a4b0-1e2c-4b71-ab42-e740f02da496",
    title: "Task 2",
    description: "Task 2 description",
    category: CATEGORIES_ENUM.FEATURE,
    status: STATUS_ENUM.BACKLOG,
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    hidden: false,
  },
  {
    id: "55cac86b-c223-4eed-992a-e231e9232d42",
    title: "Task 3",
    description: "Task 3 description",
    category: CATEGORIES_ENUM.IMPROVEMENT,
    status: STATUS_ENUM.BACKLOG,
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    hidden: false,
  },
  {
    id: "a04170d8-5f03-4a97-bbd7-cbc9516d0840",
    title: "Task 4",
    description: "Task 4 description",
    category: CATEGORIES_ENUM.REFACTOR,
    status: STATUS_ENUM.TO_DO,
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    hidden: false,
  },
  {
    id: "2fab1909-0b9f-4783-976c-4ffecb805ac5",
    title: "Task 5",
    description: "Task 5 description",
    category: CATEGORIES_ENUM.BUG,
    status: STATUS_ENUM.DOING,
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    hidden: false,
  }
];

export default mockTasks;