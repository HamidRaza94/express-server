import { Router } from 'express';

import { config } from '../../config';
// import validationHandler from '../../libs/routes/validationHandler';
// import contactValidation from './validation';
import grievanceController from './Controller';

const contactRouter = Router();

contactRouter
  .post('/:enrollmentId', config.MULTER.single('attachment'), grievanceController.create)
  .post('/', config.MULTER.single('attachment'), grievanceController.create)
  .get('/:id', grievanceController.read);

export default contactRouter;
