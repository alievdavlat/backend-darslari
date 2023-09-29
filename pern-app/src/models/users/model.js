const { fetchRow , fetchData } = require('../../utils/postgres')

const LOGIN = `

  SELECT * FROM users WHERE user_name = $1 AND user_password = $2

  `

const TEACHER_GROUPS = `

  SELECT * FROM groups WHERE teacher_ref_id = $1
`

const STUDENTS_GROUPS = `

  SELECT 
      g.group_id,
      g.group_title
  FROM 
    student_groups sg
  INNER JOIN 
    users u
  ON
    sg.student_id = u.user_id

  INNER JOIN 
    groups g 
  ON 
    sg.group_id = g.group_id 
  WHERE
    u.user_id = $1
`
  const login = ( name , password ) =>  fetchRow(LOGIN, name, password)

  const teacherGroups = id => fetchData(TEACHER_GROUPS, id)

  const studentGrops = id => fetchData(STUDENTS_GROUPS, id)
  
  module.exports = {
    login,
    teacherGroups,
    studentGrops
  }