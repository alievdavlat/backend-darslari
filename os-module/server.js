const http = require('http')
const querystring = require('querystring')
const os = require('os')
const url = require('url')
const path = require('path')
const fs = require('fs')



// os methods 
// console.log(os.freemem()); // computerdehi bosh xotira joyini korsatadi
// console.log(os.cpus()); // computer yadrolarni korsatadi
// console.log(os.version());
// console.log(os.userInfo());
// console.log(os.hostname());

const server = http.createServer()

server.on('request', (req, res) => {
  // console.log(querystring.parse(req.url.split('/')[1]));
  
const { id } = url.parse(req.url, {parseQueryString : true}).query;


if(!id){
 res.statusCode = 404
 res.end('bad request')
 return
}

if (id) {
  console.log(id);
  const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'db.json')))

  
  const foundedData = data.find(item => item.id === +id )

  console.log(foundedData);
  if (!foundedData) {
    res.statusCode = 404
    res.end('user not found')
    return
  }


  return res.end(JSON.stringify(foundedData))
}




  res.end('ok')
})

server.listen(5000, () => console.log('server is running on port 5000'))