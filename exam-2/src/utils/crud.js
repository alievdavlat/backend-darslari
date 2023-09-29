
export const find = (data, arg1, arg2) => {
  const foundedData = data.find(item => item[`${arg1}`] == arg2)
  return foundedData
}

export const deleteById = (data,arg, id) => {
  const deletedData =  data.filter(item => item[`${arg}`] != id)
  return deletedData
}





