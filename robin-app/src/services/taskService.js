class TaskService {
  constructor() {}

  // get tasks by username
  getTasks = (username) => {};

  // add new task
  addTask = (username, content) => {};

  // edit existing task content
  editTask = (username, id, content) => {};

  // delete a task
  deleteTask = (username, id) => {};

  // mark task incompleted
  setActive = (username, id) => {};

  // mark task completed
  setInactive = (username, id) => {};
}

const service = new TaskService();

export default service;
