import { Router } from 'express';
import multer from 'multer';
import FileController from './file.controller';

const upload = multer();

const FileRouter = Router();

FileRouter.post('/', upload.single('upfile'), FileController.fileMetadata);

export default FileRouter;
