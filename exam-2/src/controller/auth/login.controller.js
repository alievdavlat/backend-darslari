import { sign } from "../../utils/jwt.js";

export const loginController = (req, res) => {
  try {
    const { userId } = req;
    const token = sign({ id: userId });

    res.status(200).send({
      status: 200,
      data: {
        token,
      },
      msg: "OK",
    });
  } catch (error) {
    res.sendStatus(500);
  }
};
