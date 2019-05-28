import axios from 'axios';
import httpStatus from 'http-status-codes';

import { constants } from '../utils/access';

class SkillsService {
  constructor() {
    this.serverSkills = axios.create({
      baseURL: constants.server.baseUrl + constants.server.skills,
    });
  }

  async getSkillsList() {
    let response = {};
    try {
      response = await this.serverSkills.get('/skillslist');
    } catch (err) {
      throw err;
    }
    return response;
  }
}

export default new SkillsService();
