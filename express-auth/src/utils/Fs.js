import path from 'path'
import fs from 'fs'

export const read = ( dir ) => {
  const readData = JSON.parse(fs.readFileSync( path.join( process.cwd(), 'src', 'model', `${dir}`)))
  return readData
}

export const write = ( dir, data ) => { 
  fs.writeFileSync(  path.join( process.cwd(), 'src', 'model', `${dir}`) , JSON.stringify( data, null, 4))

}

