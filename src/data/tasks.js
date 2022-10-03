const getTasksByUserFromDB = async () => {
  const tasks = localStorage.getItem('@GaiaTasks');
  return tasks ? JSON.parse(tasks) : [];
}

export default getTasksByUserFromDB;