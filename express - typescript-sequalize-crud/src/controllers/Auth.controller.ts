import { Request, Response } from "express";
import { User } from "../model";

export default {
  REGISTER:  async (req:Request, res:Response) => {
    const { username, password } = req.body;
    try {
      const user = await User.create({ username, password });

      res.status(201).json({ message: 'Ro\'yxatdan o\'tdingiz', user });
    } catch (error) {
      res.status(500).json({ error: 'Ro\'yxatdan o\'tishda xatolik yuz berdi' });
    }
  },

  LOGIN: async (req:Request, res:Response) => {
    const { username, password } = req.body;
    try {

      const user = await User.findOne({ where: { username } });

      if (!user) {
        return res.status(401).json({ error: 'Foydalanuvchi topilmadi' });
      }
      if (user.password !== password) {
        return res.status(401).json({ error: 'Noto\'g\'ri parol' });
      }

      res.status(200).json({ message: 'Tizimga kirdingiz', user });

    } catch (error) {
      res.status(500).json({ error: 'Kirishda xatolik yuz berdi' });
    }
  }


}