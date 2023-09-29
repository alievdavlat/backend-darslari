
import express from "express"
import mongo from "./data.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json())

mongo()
  .then(() => console.log("Connected"))
  .catch((error) => console.log(error.message));



      const courseSchema = new mongoose.Schema({
            id:{
                  type : mongoose.Types.ObjectId
            },
            title: {
                  type:String,
                  min: [8, "8 dan kichkna bomasin"],
                  max:[16 , "16 dan oshb ketmasin"],
                  required:true
            },
            price :{
                  type:Number,
                  min: [ 10000 , "100 00 ta kurs bor"],
                  required:true
            },
            teachers : [
                  {
                        ref : 'Teachers',
                        type : mongoose.Schema.Types.ObjectId
                  }
            ]
            
      },
      {
            collection:'courses'
      })

      const teacherSchema = new mongoose.Schema({
            id:{
                  type : mongoose.Types.ObjectId
            },
            name : {
                  type : String,
                  required : true
            },
            course : {
                        ref : 'Course',
                        type : mongoose.Schema.Types.ObjectId
                  }
            
      },{
            collection:'teachers'
      })

      const courseModel = new mongoose.model('Course', courseSchema)
      const teacherModel =   new mongoose.model('Teachers',teacherSchema )

      app.get('/courses', async( req , res ) => {
            res.json(await courseModel.find().populate('Teachers'))
            // res.send('ok')
      })


      app.post('/courses', async ( req , res ) => {
       try {
            const { title , price } = req.body

            const newCourse = new courseModel({title, price})
            // await newCourse.save()

            res.send(newCourse)
       } catch (error) {
          console.log(error);  
       }
      })

      app.put('/courses/:id', async ( req ,res ) => {
            const { title, price } = req.body;
            const { id } = req.params

            const updatedCourse = await courseModel.findOneAndUpdate({_id: id }, { title , price})

            
            res.send(updatedCourse)

      })

      app.delete('/courses/:id', async ( req , res ) => {
            const { id } = req.params;
            const deletedCourse = await courseModel.findOneAndDelete({_id: id })
            res.send(deletedCourse)
      })


     app.post('/teachers', async( req , res ) => {

      const { name, course } = req.body
      const newteacher = new teacherModel({ name, course })
      const oldCourses = await courseModel.findOne({_id: course})
      oldCourses.teachers.push(newteacher._id)
      
      await oldCourses.save()
      await newteacher.save()
      res.json(newteacher)
     }) 


app.listen(8080, console.log(8080));


