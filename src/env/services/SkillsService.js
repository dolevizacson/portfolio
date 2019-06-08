import { constants, errorHandlers, portfolioApiServer } from '../utils/access';

class SkillsService {
  ss;
  constructor() {
    this.skillsServer = portfolioApiServer.create({
      baseURL: constants.server.baseUrl + constants.server.skills,
    });
  }

  async getSkillsList() {
    let response = {};
    try {
      response = await this.skillsServer.get('/skillslist');
    } catch (err) {
      errorHandlers.axiosErrorHandler(err);
    }
    return response;
  }
}

export default new SkillsService();
