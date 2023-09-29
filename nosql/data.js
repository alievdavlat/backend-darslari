import mongoose from "mongoose"

const mongo = async () => {
  try {
    return await mongoose
      .connect("mongodb://127.0.0.1:27017/n100")
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
};

export default mongo;