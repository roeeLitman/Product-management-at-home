export default class AppError extends Error {
    statusCode: number;
    message: string;
    constructor(message: string, statusCode : number) {
      super(message);
      this.statusCode = statusCode;
      this.message = message
    }
  }