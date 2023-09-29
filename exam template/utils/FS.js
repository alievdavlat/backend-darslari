const fs = require('fs');
const path = require('path')


 const read = dir => {
  const readFile = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'model', dir)))

  return readFile
}


 const write = ( dir , data ) => {
  fs.writeFileSync(path.join(process.cwd(), 'model', dir), JSON.stringify(data, null, 8))
}


module.exports = {
  read,
  write
}