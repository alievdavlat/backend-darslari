import {  write } from "../../utils/FS.js";

export const accountFillingController = (req, res) => {
  
  try {
    
    const { foundedUser , total, allUsers } =  req
    
      foundedUser.account = foundedUser.account
      ? foundedUser.account + total
      : total

    write("users.json", allUsers);

    res.status(200).send({
      status: 200,
      data: {
        username: foundedUser.username,
        account:foundedUser.account,
      },
      msg: "OK",
    });

  } catch (error) {
    res.sendStatus(500);
  }
};
