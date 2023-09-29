import { Request, Response } from "express";
import { Suggestion } from "../model";

export default {
  GET: async (_: Request, res: Response) => {
    try {
      const suggestions = await Suggestion.findAll();


      res.status(200).json(suggestions);


    } catch (error) {
      res
        .status(500)
        .json({ error: "Ma'lumotlarni olishda xatolik yuz berdi" });
    }
  },

  GET_BY_ID: async (req:Request, res:Response) => {
    const { id } = req.params;
    try {

      const suggestion = await Suggestion.findByPk(id);
      
      if (!suggestion) {
        return res.status(404).json({ error: 'Taklif topilmadi' });
      }
      
      res.status(200).json(suggestion);
    } catch (error) {
    
      res.status(500).json({ error: 'Ma\'lumotlarni olishda xatolik yuz berdi' });
    
    }
  },

  POST:  async (req:Request, res: Response) => {
    try {
      const { title, description, status } = req.body;
      const suggestion = await Suggestion.create({ title, description, status });

      res.status(201).json({ message: 'Taklif qo\'shildi', suggestion });

    } catch (error) {

      res.status(500).json({ error: 'Taklif qo\'shishda xatolik yuz berdi' });
    }
  },

  PUT: async (req:Request, res:Response) => {
    const { id } = req.params;

    
    const { title, description, status } = req.body;
    try {
    
      const suggestion = await Suggestion.findByPk(id);
    
      if (!suggestion) {
        return res.status(404).json({ error: 'user topilmadi' });
      }
    
    
      suggestion.title = title;
      suggestion.description = description;
      suggestion.status = status;
      await suggestion.save();
    
    
      res.status(200).json({ message: 'Taklif yangilandi', suggestion });
    } catch (error) {
      res.status(500).json({ error: 'Taklifni yangilashda xatolik yuz berdi' });
    }
  },

 DELETE:  async (req:Request, res:Response) => {
    const { id } = req.params;
    try {
      const suggestion = await Suggestion.findByPk(id);
      if (!suggestion) {
        return res.status(404).json({ error: 'user topilmadi' });
      }
      await suggestion.destroy();
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'userni o\'chirishda xatolik yuz berdi' });
    }
}

};
