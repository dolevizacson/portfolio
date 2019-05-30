export default class UnAuthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnAuthorizedError';
  }
}
