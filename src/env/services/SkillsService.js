import { constants, errorHandlers, portfolioApiServer } from '../utils/access';

class SkillsService {
  ss;
  constructor() {
    this.skillsServer = portfolioApiServer.create({
      baseURL: constants.server.baseUrl + constants.server.skills,
    });
  }

  async getSkillsLists() {
    let response;
    try {
      response = await this.skillsServer.get('/skillslist');
    } catch (err) {
      errorHandlers.axiosErrorHandler(err);
    }
    return response.data;
  }

  async postSkillsList(skillsList) {
    let response;
    try {
      response = await this.skillsServer.post(`/skillslist`, skillsList);
    } catch (err) {
      errorHandlers.axiosErrorHandler(err);
    }
    return response.data;
  }

  async updateSkillsList(id, skillsList) {
    let response;
    try {
      response = await this.skillsServer.put(`/skillslist/${id}`, skillsList);
    } catch (err) {
      errorHandlers.axiosErrorHandler(err);
    }
    return response.data;
  }

  async deleteSkillsList(id) {
    let response;
    try {
      response = await this.skillsServer.delete(`/skillslist/${id}`);
    } catch (err) {
      errorHandlers.axiosErrorHandler(err);
    }
    return response.data;
  }
}

export default new SkillsService();
