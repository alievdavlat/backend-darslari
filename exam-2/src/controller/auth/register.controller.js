import { read, write } from "../../utils/FS.js";
import bcrypt from "bcrypt";
import { sign } from "../../utils/jwt.js";

export const registerController = async (req, res) => {
  try {
    const { userName, userPassword, role } = req;
    let hashedPassword = "";
    const allUsers = read("users.json");

    hashedPassword = await bcrypt.hash(userPassword, 10);

    


    allUsers.push({
      id: allUsers.at(-1)?.id + 1 || 1,
      username: userName,
      password: hashedPassword,
      role,
      account: null,
    });

    const token = sign({ id: allUsers.at(-1)?.id });

    write("users.json", allUsers);

    res.status(201).send({
      status: 201,
      data: {
        token,
      },
      msg: "CREATED",
    });
  } catch (error) {
    res.sendStatus(500);
  }
};
