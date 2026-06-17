import multer from 'multer';
import { resolve } from 'path';
import { promises as fs } from 'fs';
import multerConfig from '../config/multerConfig.js';

import Photo from '../models/Photo.js';

const upload = multer(multerConfig).single('photo');

class PhotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      const { originalname, filename } = req.file;

      try {
        const { aluno_id } = req.body;
        const photo = await Photo.create({ originalname, filename, aluno_id });

        return res.json(photo);
      } catch {
        const filePath = resolve(__dirname, '..', '..', 'uploads', filename);

        try {
          await fs.unlink(filePath);
        } catch (unlinkError) {
          console.error('Falha ao remover arquivo órfão:', unlinkError);
        }

        return res.status(400).json({
          errors: ['Aluno não existe.'],
        });
      }
    });
  }
}

export default new PhotoController();
