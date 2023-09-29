

const updateHospitalMiddleware = ( req , res , next ) => {
  try {
    const { name , address} = req.body;
    const { id } = req.params;

    // if (!name || !address || !id ) {
    //   res.send({
    //     status: 400,
    //     data:null,
    //     msg:"values required"
    //   })
    //   return
    // }


    let data ;


    if (name && address ) {
      data = {name, address}

    } else if(name && !address){
      data = { name}

    } else if( !name && address){
      data = { address }
      
    }



    req.data = data
    req.id = id
    next()

  } catch (err) {
    res.send({
      status: 400,
      data:null,
      msg:err.message
    })
  }
}

export default  updateHospitalMiddleware