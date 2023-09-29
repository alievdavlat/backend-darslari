import { Request, Response } from "express";
import { Comment } from "../model";

export default {
  GET:async (req:Request, res:Response) => {
    const { id } = req.params;
    try {
      const comment = await Comment.findByPk(id);
      
      if (!comment) {
        return res.status(404).json({ error: 'Komment topilmadi' });
      }
  
      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json({ error: 'Kommentni olishda xatolik yuz berdi' });
    }
  },


  POST: async (req: Request, res: Response) => {
    const { content, user_id, msg } = req.body;
    try {


      const comment = await Comment.create({ content, user_id, msg });

      res.status(201).json({ message: 'Kommentariya qo\'shildi', comment });
    } catch (error) {
      res.status(500).json({ error: 'Kommentariya qo\'shishda xatolik yuz berdi' });
    }
  },

  PUT:async (req:Request, res: Response) => {
    const { id } = req.params;
    const { content, user_id, msg } = req.body;
    try {

      const comment = await Comment.findByPk(id);
      
      if (!comment) {
        return res.status(404).json({ error: 'Komment topilmadi' });
      }


      comment.content = content;
      comment.user_id = user_id;
      comment.msg = msg;
  

      await comment.save();
  
      res.status(200).json({ message: 'Komment yangilandi', comment });
    } catch (error) {
      res.status(500).json({ error: 'Kommentni yangilashda xatolik yuz berdi' });
    }
  }
  
}