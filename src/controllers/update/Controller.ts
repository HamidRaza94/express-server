import { Request, Response, NextFunction } from 'express';

import { updateMiddleware } from '../../middlewares';
import { successHandler } from '../../libs';

class UpdateController {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await updateMiddleware.create(req);
      res.status(201).send(successHandler('Successfully Created', 201, result));
    } catch ({ error, message, status }) {
      next({
        error,
        message,
        status
      });
    }
  }

  public async read(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await updateMiddleware.read(req);
      res.status(200).send(successHandler('Successfully Fetched', 200, result));
    } catch ({ error, message, status }) {
      next({
        error,
        message,
        status
      });
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await updateMiddleware.update(req);
      res.status(201).send(successHandler('Successfully Updated', 201, result));
    } catch ({ error, message, status }) {
      next({
        error,
        message,
        status
      });
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await updateMiddleware.delete(req);
      res.status(200).send(successHandler('Successfully Deleted', 200, result));
    } catch ({ error, message, status }) {
      next({
        error,
        message,
        status
      });
    }
  }
}

export default new UpdateController();
