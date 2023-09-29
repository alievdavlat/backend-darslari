const  PG  = require('../../utils/postgres')



class UsersModel extends PG {
    getUsers() {
    return   this.fetchData(`select * from users`)
   }

}


module.exports = new UsersModel()

