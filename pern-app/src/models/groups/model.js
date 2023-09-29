const { fetchRow , fetchData } = require('../../utils/postgres')

const GROUP_STUDENTS = `

  SELECT 
      u.user_id,
      u.user_name 
  FROM 
      student_groups sg
  INNER JOIN 
      users u 
  ON  
      sg.student_id = u.user_id
  WHERE 
      sg.group_id = $1

  `

  const GROUP_HOMEWORK = `

  SELECT 
    h.homework_id AS id ,
    h.homework_title AS title,
    h.homework_content AS content

  FROM 
    groups g
  INNER JOIN 
    homeworks h
  ON  
    g.group_id = h.group_id
  WHERE 
  g.group_id = $1 
  `


  const groupStudents = ( id ) =>  fetchData(GROUP_STUDENTS, id)
  const homework = ( id ) => fetchData(GROUP_HOMEWORK, id)
  
  module.exports = {
    groupStudents,
    homework
  }