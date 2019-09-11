import { constants, errorHandlers, portfolioApiServer } from '../utils/access';

class TaskListService {
  constructor() {
    this.taskListServer = portfolioApiServer.create({
      baseURL: constants.server.baseUrl + constants.server.taskList,
    });
  }

  async getTaskList() {
    let response;
    try {
      response = await this.taskListServer.get('/task');
    } catch (err) {
      errorHandlers.taskListErrorHandler(err);
    }
    return response.data;
  }

  async getTask(id) {
    let response;
    try {
      response = await this.taskListServer.get(`/task/${id}`);
    } catch (err) {
      errorHandlers.taskListErrorHandler(err);
    }
    return response.data;
  }

  async postTask(task) {
    let response;
    try {
      response = await this.taskListServer.post('/task', task);
    } catch (err) {
      errorHandlers.taskListErrorHandler(err);
    }
    return response.data;
  }

  async updateTask(id, task) {
    let response;
    try {
      response = await this.taskListServer.put(`/task/${id}`, task);
    } catch (err) {
      errorHandlers.taskListErrorHandler(err);
    }
    return response.data;
  }

  async toggleTask(id) {
    let response;
    try {
      response = await this.taskListServer.patch(`/task/${id}`);
    } catch (err) {
      errorHandlers.taskListErrorHandler(err);
    }
    return response.data;
  }

  async deleteTask(id) {
    let response;
    try {
      response = await this.taskListServer.delete(`/task/${id}`);
    } catch (err) {
      errorHandlers.taskListErrorHandler(err);
    }
    return response.data;
  }
}

export default new TaskListService();
