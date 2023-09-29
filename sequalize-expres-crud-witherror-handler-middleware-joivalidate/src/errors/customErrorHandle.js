



export class CustomErrorHandler extends Error {
  constructor(message , status = 500){
    super()
      this.message = message
      this.status = status
  }

  getErrorInfo(msg = "Internal Server Error", status = 500){
    return {
      message:msg ,
      status 
    }
  }
}