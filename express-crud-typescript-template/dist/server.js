import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import data from './db/users.js';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.json());
app.get('/', (req, res) => {
    res.json(data);
});
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
