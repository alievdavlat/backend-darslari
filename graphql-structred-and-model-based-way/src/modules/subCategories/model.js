
import { fetchData, fetchRow} from '../../utils/postgres.js'


const CREATE_SUBCATEGORY  = `
INSERT INTO subcategories (subcategory_title, category_id) VALUES($1, $2) RETURNING *
`

const createSubCategory  = (subcategory_title , category_id) => fetchRow(CREATE_SUBCATEGORY,subcategory_title, category_id)


const GET_ALL_SUBCATEGORY = `
SELECT
  s.subcategory_id , s.subcategory_title, s.created_at
FROM subcategories s 

WHERE s.category_id = $1
`

const getSubCategories = (id) => fetchData(GET_ALL_SUBCATEGORY, id)


const GET_ONE_SUBCATEGORY = `
SELECT
   s.subcategory_id , s.subcategory_title, s.created_at
FROM subcategories s 

WHERE s.category_id = $1
`


const getOneSubCategory = (id) => fetchRow(GET_ONE_SUBCATEGORY, id)


const UPDATE_SUBCATEGORY = `
UPDATE subcategories SET subcategory_title = (
  CASE 
      WHEN true THEN $2 ELSE ( SELECT subcategory_title FROM subcategories WHERE subcategory_id = $1)
  END
)
WHERE subcategory_id = $1 RETURNING *

`

const updateSubCategory = (id, title) => fetchRow(UPDATE_SUBCATEGORY, id, title)


const DELETE_SUBCATEGORY  = `
DELETE FROM subcategories WHERE subcategory_id = $1 RETURNING *
`


const deleteSubCategory  = ( id ) => fetchRow(DELETE_SUBCATEGORY , id)



export { 
  createSubCategory,
  getOneSubCategory,
  getSubCategories,
  deleteSubCategory,
  updateSubCategory
}