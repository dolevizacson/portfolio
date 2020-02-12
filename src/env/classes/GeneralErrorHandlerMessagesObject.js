export default class GeneralErrorHandlerMessagesObject {
  constructor() {
    this.unAuthorizedError = 'Unauthorized';
    this.internalServerError = 'Internal server error';
    this.noResponseError = 'No response from the server';
    this.badRequestObjectError = 'Request not sent';
  }
  get unAuthorizedError() {
    return this._unAuthorizedError;
  }

  set unAuthorizedError(message) {
    this._unAuthorizedError = message;
  }

  get internalServerError() {
    return this._internalServerError;
  }

  set internalServerError(message) {
    this._internalServerError = message;
  }

  get noResponseError() {
    return this._noResponseError;
  }

  set noResponseError(message) {
    this._noResponseError = message;
  }

  get badRequestObjectError() {
    return this._badRequestObjectError;
  }

  set badRequestObjectError(message) {
    this._badRequestObjectError = message;
  }
}
