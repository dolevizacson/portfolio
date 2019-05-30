export default class BadRequestObjectError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequestObjectError';
  }
}
