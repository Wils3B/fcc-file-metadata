import { Request, Response } from 'express';

const FileController = {
  fileMetadata(req: Request, res: Response) {
    try {
      res.json({
        name: req.file?.originalname,
        type: req.file?.mimetype,
        size: req.file?.size,
      });
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  },
};

export default FileController;
