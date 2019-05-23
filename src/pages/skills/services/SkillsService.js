import { serverSkills } from '../../../api/portfolioServer';

class SkillsService {
  async getSkillsList() {
    let response = {};
    try {
      response = await serverSkills.get('/skillslist');
    } catch (err) {
      throw err;
    }
    return response;
  }
}

export default new SkillsService();
