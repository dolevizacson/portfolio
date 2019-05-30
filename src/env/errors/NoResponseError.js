export default class NoResponseError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NoResponseError';
  }
}
