import fetchData, { fetchRow } from "../../utils/postgres.js"

const RESTARAUNTS =  `
  SELECT * FROM restaraunts
`

export const allRestaraunts = () => fetchData(RESTARAUNTS)



const NEW_RESTARAUNT = `
  INSERT INTO restaraunts(name) VALUES ($1) RETURNING * 
`

export const addRestaraunt = name => fetchRow(NEW_RESTARAUNT, name)


const UPDATE_RESTARAUNT = `
  UPDATE restaraunts SET name = $1 , address = $2 WHERE id = $3 RETURNING * 
`

export const updateRestaraunt = async(name, address, id) => {

  const oldRestaraunt = await fetchRow('SELECT * FROM restaraunts WHERE id = $1', id )

  

  return fetchRow(
    UPDATE_RESTARAUNT,
    name ? name : oldRestaraunt.name,
    address ? address : oldRestaraunt.address,
    id
  )

}



const DELETE_RESTARAUNT = `
DELETE FROM restaraunts WHERE id = $1 RETURNING * 
`
export const deleteRestaraunt = id =>  fetchRow(DELETE_RESTARAUNT, id)



const RESTARAUNT_BY_ID = `

SELECT * FROM restaraunts WHERE id = $1
`


export const ById = ( id ) => fetchRow(RESTARAUNT_BY_ID, id)