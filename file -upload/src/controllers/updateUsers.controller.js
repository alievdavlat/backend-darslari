import { read, write, deleteFile } from "../utils/FS.js";



const updateUsersController = (req, res) => {
 try {
  const { name } = req.body
  const { filename } = req.file
  const { id } = req.params

  const allUsers = read("users.json");
  const foundedUsers = allUsers.find(user => user.id == + id)
  const updatedUsers = allUsers.map((user) =>
    user.id == +id
      ? { id, name, img: `/img/${filename}`, download: `/download/${filename}` }
      : user
  );

   

  write('users.json', updatedUsers)
  deleteFile( String(foundedUsers.img.slice(5)))
 return res.send('ok')
 } catch (error) {
  res.sendStatus(400);
 }
};

export default updateUsersController