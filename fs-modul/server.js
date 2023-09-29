// FS - File sytem 

const http = require('http')
const fs = require('fs')



// fs.appendFileSync("products.json", JSON.stringify({ id : allProducts[allProducts.length - 1]?.id + 1 || 1, name:'olma', price:'1000'}, null, 4)) fileni yaratadi
// fs.unlinkSync('products.json')  fileni ochradi 
// fs.mkdirSync("app", { recursive: true }) papka yaratadi 


// const videoData = fs.createReadStream('file name')

// videoData.on('data', chunk => {
//   console.log(chunk);
// })

 

http.createServer( (req , res ) => {

  if(req.method == "GET"){
    const data = fs.readFile('./model/courses.json', (err, data) => {
        if(err) throw err
        
        const parseData = JSON.parse(data);
        res.writeHead(200, {"content-type": "application/json"})
        res.end(JSON.stringify(parseData))
       
      
    })
    return
    
  }


  if(req.method == "POST"){

    req.on('data', chunk => {
       const { name } = JSON.parse(chunk)
       const newData = JSON.parse(fs.readFileSync('./model/courses.json'))
       newData.push({id: newData[newData.length - 1]?.id + 1 || 1 , name})
       

       fs.writeFileSync("./model/courses.json", JSON.stringify(newData, null,4) )
       res.end("OK")
    })
    return
  }

  res.end("uyga bor bratwka")


})
.listen(4000, () => {
  console.log('server running on port : 4000');
})




/*
1 - method
fs.readFile - xaqida 
readFile - asinhron bolib oqidi kodlani 

    fs.readFile("./model/courses.json", (err, data) => {
      if(err){
          throw new Error("err")  ;
          res.end(data)
      }

    }) ascyncron code rewiev



2 - method

    readFileSync - xaqida
    readFileSync = kodlani sinxron oqidi      

     const data = fs.readFileSync('./model/courses.json')
      
    console.log(JSON.parse(data)); 


    3 - method 
    
    writeFileSync - malumotni sinhron tarzdda qoshadi va 1 chi parametri path 2chisi data 
    
    fs.writeFileSync("./model/courses.json", JSON.stringify(newData, null,4) )

    3 - method 
    writeFile - malumotni asinhron yozadi va 1 parametri path 2 chisi data 3 chisi collback

        fs.writeFileSync("./model/courses.json", JSON.stringify(newData, null,4), err => {
          if(err) throw err
          console.log("ok")
        } )


*/