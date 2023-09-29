export const getAccountController = (req, res) => {
  try {
    const { foundedUser } = req

    res.status(200).json({
      status: 200,
      data: {
        username: foundedUser.username,
        account: foundedUser.account || "hisob bo'sh",
      },
      msg: "OK",
    });
  } catch (error) {
    res.sendStatus(500);
  }
};
