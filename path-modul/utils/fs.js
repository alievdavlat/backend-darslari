
const fs = require('fs')
const path = require('path')

const read = (dir) => {
  const readData = JSON.parse(fs.readFileSync(path.join(process.cwd(), `${dir}`)))

  return readData
}


module.exports = {
  read
}