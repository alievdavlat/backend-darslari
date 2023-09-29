import fs from 'fs'
import path from 'path'

export const read = (dir) => {
  const readFile = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src', 'model', dir)))
  return readFile
}

export const write = (dir, data) => {
  fs.writeFileSync(path.join(process.cwd(), 'src', 'model', dir), JSON.stringify(data, null, 4))
}

