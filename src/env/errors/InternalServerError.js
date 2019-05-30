export default class IternalServerError extends Error {
  constructor(message) {
    super(message);
    this.name = 'IternalServerError';
  }
}
