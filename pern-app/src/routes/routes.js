
const express = require('express')
const groups = require('../models/groups/groups')
const users = require('../models/users/users')
const { accesTokenMiddleware } = require('../middlewares/accesToken.middleware')
const router = express.Router()


  router
    .post(' ', users.LOGIN)
    .get('/teacher/groups', accesTokenMiddleware, users.TEACHER_GROUPS)
    .get('/student/groups', accesTokenMiddleware, users.STUDENTS_GROUPS)
    .get('/group/student/:id', groups.GROUP_STUDENTS)
    .get('/student/homework/:id', groups.HOMEWORKS)



    module.exports = {
      router
    }