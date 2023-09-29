import { read } from "../../utils/FS.js";
import bcrypt from "bcrypt";
import { find } from "../../utils/crud.js";

export const loginMiddlware = async (req, res, next) => {
try {
  const { username, password } = req.body;

  const allUsers = read("users.json");

  const foundedUser = find(allUsers, 'username', username)

  const isValidPassword = await bcrypt.compare(password, foundedUser.password);

  if (!foundedUser && !isValidPassword) {
    return res.status(400).send({
      status: 400,
      data: null,
      msg: "username yoki password xato",
    });
  }

  req.userId = foundedUser.id;
  next();
} catch (error) {
  res.sendStatus(500);
}
};
