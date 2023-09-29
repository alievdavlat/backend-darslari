import { fetchData, fetchRow } from '../../utils/postgres.js'


const NEW_CAR = `
INSERT INTO cars (name) VALUES ($1) RETURNING *
`

const newCar = (name) => fetchRow(NEW_CAR, name)



const ALL_CARS  = `
SELECT * FROM cars ORDER BY id ASC 
`

const allCars = () => fetchData(ALL_CARS)


export {
  newCar,
  allCars
}