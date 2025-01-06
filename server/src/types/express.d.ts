import 'express';


declare module 'express' {
    interface Request {
      payload?: {
        [key: string]: any;
      };
    }
  }