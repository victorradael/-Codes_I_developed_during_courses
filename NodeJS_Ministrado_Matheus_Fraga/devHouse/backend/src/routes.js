import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/uploadImgs';

import SessionCntroller from './controllers/SessionController';
import HouseController from './controllers/HouseController';

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionCntroller.store);
routes.post('/houses',upload.single('thumbnail'), HouseController.store);

export default routes;