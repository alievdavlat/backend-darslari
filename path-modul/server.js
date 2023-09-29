const http = require('http')
const {read} = require('./utils/fs.js')



// console.log(__dirname, __filename); 
//__filname base directoryni fayligacha ob beradi
// __dirname base directoryni ozini ob beradi


// const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'users.json')))  directoryni ob beradi 
// const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json')))  directoryni ob beradi 
// console.log(path.resolve(__dirname, 'users.json'));  ham hudi joindeg ishlidi
// console.log(path.extname('./server.js')); qaydr diretorydegi fayli farmatini korsatib beradi oberadi  
// console.log(path.parse('./server.js')); file haqida toliq malumot beradi 
// console.log(path.isAbsolute(__dirname, 'server.js')); // absalute directoryni true falseligini tekwradi 



const server = http.createServer((req, res) => {
  console.log(read('users.json'));
  res.end('OK')
})

server.listen(6060, () => {
  console.log('server is running on the port : 6060');
})
