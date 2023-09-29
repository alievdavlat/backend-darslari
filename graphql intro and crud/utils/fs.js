import fs from 'fs'
import path from 'path'

export const getAll = (  dir ) => {
  const readFile = JSON.parse(fs.readFileSync(path.join(process.cwd(), `model`, `${dir}`)))

  return readFile
}


export const getOne = ( where , id  ) => {
const elem =   getAll(where)

const foundedElem =  elem.find(item => item.id == id)
return foundedElem
}

export const create = ( dir, data ) => {
  fs.writeFileSync(path.join(process.cwd(), 'model', `${dir}`), JSON.stringify(data, null, 4))
}


export const deleteOne = ( dir , ...args) => {
const elem = getAll(dir)

const deletedElem = elem.filter(item => item[args] !== args )

create(dir, deletedElem)

}


export const updateOne = (dir, id , ...params) => {
  const elem = getAll(dir)

  const foundedElem = elem.find(item => item[id] === id)

  foundedElem[params] = params

  create(dir , foundedElem)
}




