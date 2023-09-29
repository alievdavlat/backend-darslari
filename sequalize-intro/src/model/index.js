
import sequelize from "../config/sequalize.config.js";

import Hospitals from "./hospital/HOspital.model.js";
import Hospital_branches from "./hospital_branches/hospitalBranches.model.js";



     /* relations */

//hasOne
//hasMany
//belongsTo
//belongsToMany


Hospitals.hasMany(Hospital_branches, {
  foreignKey:'id'
})

Hospital_branches.belongsTo(Hospitals, {
  foreignKey:'hospital_id'
})



sequelize.sync({alter: true})
export {
  Hospitals,
  Hospital_branches
}