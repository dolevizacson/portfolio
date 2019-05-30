import axios from 'axios';

import { constants, errorHandlers } from '../utils/access';

class SkillsService {
  constructor() {
    this.serverSkills = axios.create({
      baseURL: constants.server.baseUrl + constants.server.skills,
      timeout: 2000,
    });
  }

  async getSkillsList() {
    let response = {};
    try {
      response = await this.serverSkills.get('/skillslist');
    } catch (err) {
      errorHandlers.axiosErrorHandler(err);
    }
    return response;
  }
}

export default new SkillsService();
