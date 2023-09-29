
  import fetchData from "../../utils/postgres.js"

  const BREANCHES_BY_ID = `
  
    SELECT * FROM branches WHERE restaraunt_id = $1
  `

 export const getBranches = id => fetchData(BREANCHES_BY_ID, id)

 
  
  