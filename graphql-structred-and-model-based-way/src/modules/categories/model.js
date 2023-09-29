
import { fetchData, fetchRow } from "../../utils/postgres.js";


const NEW_CATEGROY = `
INSERT INTO categories (category_title) VALUES ($1) RETURNING *
`


 const newCatgory = ( title ) => fetchRow(NEW_CATEGROY, title)

const ALL_CATEGORIES  = `

SELECT * 

FROM 

categories
`



 const allCategories = () => fetchData(ALL_CATEGORIES)


const GET_ONE_CATEGORY = `

SELECT 

* 

FROM 

categories c

WHERE c.category_id = $1
`

 const getOneCategory = ( id ) => fetchRow(GET_ONE_CATEGORY, id)


const UPDATE_ONE_CATEGORY = `
UPDATE categories set category_title = (
  CASE 
    WHEN true THEN $2 ELSE ( SELECT category_title FROM categories WHERE category_id = $1 )
  END 
)

WHERE category_id = $1
RETURNING * 
`

 const updateCategory = (id, title) => fetchRow(UPDATE_ONE_CATEGORY, id, title)


const DELETE_CATEGORY = `

delete from categories where category_id =  $1 RETURNING *
`

const deleteCategory = (id) => fetchRow(DELETE_CATEGORY , id)

 export {
  newCatgory, 
  allCategories,
  getOneCategory,
  updateCategory,
  deleteCategory
 }

