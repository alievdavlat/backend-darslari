"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../model");
exports.default = {
    // CREATE 
    post: async (req, res) => {
        try {
            const { name } = req.body;
            const user = await model_1.User.create({ name });
            res.status(201).json(user);
        }
        catch (error) {
            res.status(500).json({ error: 'Error creating user' });
        }
    },
    // READ
    get: async (req, res) => {
        try {
            const users = await model_1.User.findAll();
            res.status(200).json(users);
        }
        catch (error) {
            res.status(500).json({ error: 'Error fetching users' });
        }
    },
    // UPDATE 
    put: async (req, res) => {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const user = await model_1.User.findByPk(id);
            if (user) {
                user.name = name;
                await user.save();
                res.status(200).json(user);
            }
            else {
                res.status(404).json({ error: 'User not found' });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Error updating user' });
        }
    },
    // DELETE 
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await model_1.User.findByPk(id);
            if (user) {
                await user.destroy();
                res.status(204).send();
            }
            else {
                res.status(404).json({ error: 'User not found' });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Error deleting user' });
        }
    }
};
