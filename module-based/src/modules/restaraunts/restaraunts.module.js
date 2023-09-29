import { ById, addRestaraunt, allRestaraunts, deleteRestaraunt, updateRestaraunt } from "./restaraunts.model.js"
import { getBranches } from "../branches/branches.model.js";
import moment from "moment/moment.js";

export const   getData = async (_ ,res ) => {

  try { 
    console.log(await allRestaraunts());
    res.json( await (await allRestaraunts()).filter(item => item.created_at = moment(item.created_at).format('LLLL')))
  } catch (error) {
    console.log(error.message);
  }

}

export const   getDataById = async (req ,res ) => {

  try { 
    const { id } = req.params
    const restaraunts = await ById(id)
   

    if (restaraunts) {
        restaraunts.branches = await getBranches(id)

    
        return res.status(200).json({
          msg :"success",
          data : restaraunts
        })
        
    }

  } catch (error) {
    console.log(error.message);
  }

}

export const postData = async ( req , res ) => {
  try {
    
    const { name } = req.body

    const newRestaraunt = await addRestaraunt(name)
    if(newRestaraunt) {
     return res.status(200).json({
        status:201,
        message:'new restaraunt has been created',
        data:newRestaraunt        
      })
      
    }
  } catch (error) {
    console.log(error.message);
  }
}


export const putData = async ( req , res ) => {
  try {
      const { id } = req.params
      const { name , address } = req.body

      const updatedRestaraunt = await updateRestaraunt(name, address, id)

      if(updateRestaraunt){
        return res.status(200).json({
          status:200,
          message:'restaraunt has been updated',
          data:updatedRestaraunt
        })
      }

  } catch (error) {
    console.log(error.message);
  }
}

export const deleteData = async ( req , res ) => {
  try {
    
    const { id } = req.params
    
    res.json(await deleteRestaraunt(id))
  } catch (error) {
    console.log(error.message);
  }
}
