const http = require('http')
const { read , write } = require('./utils/FS')

const server = http.createServer( (req, res) => {

  const url = req.url.split('/')[1]
  const url2 = req.url.split('/')[2]
  const get = req.method == 'GET'
  const post = req.method == "POST"
  const put = req.method == "PUT"
  const deleteMETHOD = req.method == "DELETE"


  if( get && url == 'markets'){
    const allMarkets = read('markets.json')
    const allBranches = read('branches.json')
    const allWorkers = read('workers.json')
    const allProducts = read('products.json')

    const findWorkers = allWorkers.find(item => item.workers_type == allBranches.filter(branch => branch.workers_type).workers_type)
    const findproducts = allProducts.filter(item => item.products_type == allBranches.find(branch => branch.products_type).products_type)

  

    const findBranch = allBranches?.filter(branch => branch.branch_type == allMarkets.find(item => item.market_type).market_type)
    
    allBranches?.forEach(e => {
      
      e.workers =  findWorkers
      e.products = findproducts

    });

    allMarkets?.forEach(e => {
      
      e.branches = findBranch

    });

   


    res.end(JSON.stringify(allMarkets))
    return
  }


  if(post && url == "addMarkets"){
    req.on('data', chunk => {
      const { name , market_type } = JSON.parse(chunk)
        const allMarkets = read('markets.json')
        allMarkets.push({ id : allMarkets.at(-1)?.id + 1 || 1, name, branches:[], market_type})
        write('markets.json', allMarkets)
        res.end('market successfuly added')
        return
    })
    return
  }

  if(put && url == 'updatemarkets'){
    req.on('data', chunk => {
      const {  name , market_type  } = JSON.parse(chunk)
        const allMarkets = read('markets.json')
        const allBranches = read('branches.json')

        const updatedMarkets = allMarkets?.map(item => item.id == url2 ? { id:item.id, name, branches:[], market_type } : item);
        const updatedBranches = allBranches?.map(item => {
          return item?.branch_type == market_type ? {
            id: item.id , 
            name:` ${name}  ${item.address} filiali` , 
            address:item.address ,
            branch_type:market_type
          
          } : item
        })

        write('brancches.json', updatedBranches)
        write('markets.json', updatedMarkets)

        res.end('market successfuly updated')
        return
    })
    return
  }


  if(deleteMETHOD && url == 'deletemarkets'){
    req.on('data', chunk => {
    const {  market_type } = JSON.parse(chunk)
    const allMarkets = read('markets.json')
    const allBranches = read('branches.json')
    
      const deletedmarkets = allMarkets.filter(item => item.id != url2 )
      const deletedBranches = allBranches?.filter(item => item?.branch_type != market_type)
      write('markets.json', deletedmarkets)
      write('braches.json', deletedBranches)
      res.end('market successfuly deleted')
      return
    })
      return

    } 



  // -------------------------------

  if(get && url == 'branches'){
    const allBranches = read('branches.json')
   
      
      const allWorkers = read('workers.json')
      const allProducts = read('products.json')

      const findWorkers = allWorkers.filter(item => item.workers_type == allBranches.find(branch => branch.workers_type))
      const findproducts = allProducts.filter(item => item.products_type == allBranches.find(branch => branch.products_type))
      allBranches.
      res.end(JSON.stringify())
      return
  }


  if(post && url == 'addBranches'){
    
    req.on('data', chunk => {
      const { name , address , branch_type , products_type, workers_type} = JSON.parse(chunk)
      const allBranches = read('branches.json')

      allBranches.push({
        id:allBranches.at(-1)?.id + 1 || 1 ,
        name, 
        address,
        workers:[],
        products:[],
        branch_type,
        products_type,
        workers_type
      })

      write('branches.json', allBranches)
      res.end('branch successfuly added')
      return
    })
    return
  }


if(put && url == 'updatebranch'){

  req.on('data', chunk => {
    const {  name, branch_type, products_type , workers_type} = JSON.parse(chunk)
    const allBranches = read('branches.json')
    const allWorkers = read('workers.json')
    const allProducts = read('products.json')

    const updatedBranch = allBranches.map(item => {
      return item.id == url2 ? {
            id: item.id,
            name,
            branch_type,
            address: item.address,
            products: item.products,
            products_type,
            workers_type

      } : item
    })

      const updatedWorkers = allWorkers?.map(item => item?.workers_type == workers_type  ? { ...item, workers_type} : item)
      const updatedProducts = allProducts?.map(item => item?.products_type == products_type  ? {...item, products_type} : item)

      write('branches.json', updatedBranch )
      write('workers.json', updatedWorkers )
      write('products.json', updatedProducts)
    res.end('branch succesfuly updated')
    return
  })
  return
}


if(deleteMETHOD && url == 'deletebranch'){
    const allBranches = read('branches.json')
    const allWorkers = read('workers.json')
    const allProducts = read('products.json')

    const foundedBranch = allBranches?.find(branch => branch.id == url2)

    const deletedBranches = allBranches?.filter(branch => branch?.id != url2)
    const deletedWorkers = allWorkers?.filter(worker => worker?.workers_type != foundedBranch.workers_type)
    const deletedProducts = allProducts?.filter(product => product?.products_type != foundedBranch.products_type)

    
    write('branches.json', deletedBranches )
    write('workers.json', deletedWorkers )
    write('products.json', deletedProducts)
  res.end('branch succesfuly deleted')
  return

}

// ---------------------------------------------------

if( get && url == 'products'){

  const allProducts = read('products.json')

  allProducts.forEach(product => {
    delete product.products_type
  })

  res.end(JSON.stringify(allProducts))
  return
}


if(post && url == 'addproducts'){
  req.on('data', chunk => {
    const { name , price , count , products_type} = JSON.parse(chunk)
    const allProducts = read('products.json')

    allProducts.push({
      id:allProducts.at(-1)?.id + 1 || 1 ,
      name,
      price,
      count,
      products_type
    })

    write('products.json', allProducts)
    res.end('added new product')
    return
  })
  return
}

if(put && url == 'updateproduct'){

  req.on('data', chunk => {
    const {  name , price , count , products_type} = JSON.parse(chunk)
    const allProducts = read('products.json')

    const updatedProducts = allProducts?.map(item => item.id == url2 ? { id:item.id , name: name || item.name , price: price || item.price , count: count || item.count, products_type: products_type || item.products_type } : item)

    write('products.json', updatedProducts)
    res.end('added new product')
    return
  })
  return


}

if(deleteMETHOD && url == 'deleteproduct'){
  const allProducts = read('products.json')

  const deletedProduct = allProducts?.filter( item => item.id != url2)

    write('products.json', deletedProduct)
    res.end('product deleted')
    return
}

// -----------------------------------------------
if( get && url == 'workers'){

  const allWorkers = read('workers.json')

  res.end(JSON.stringify(allWorkers))
  return
}


if(post && url == 'addworker'){
  req.on('data', chunk => {
    const { name , position , workers_type} = JSON.parse(chunk)
    const allWorkers = read('workers.json')

    allWorkers.push({
      id:allWorkers.at(-1)?.id + 1 || 1 ,
      name,
      position,
      workers_type
    })

    write('workers.json', allWorkers)
    res.end('added new worker')
    return
  })
  return
}


if(put && url == 'updateworker'){

  req.on('data', chunk => {
    const {workers_type, position} = JSON.parse(chunk)
    const allWorkers = read('workers.json')

    const updatedWorkers = allWorkers.map(item => item.id == url2 ? { id:item.id , name: name || item.name , workers_type: workers_type || item.workers_type, position: position || item.position } : item)

    write('workers.json', updatedWorkers)
    res.end('worker updated')
    return
  })
  return


}


if(deleteMETHOD && url == 'deleteworker'){
  const allWorkers = read('workers.json')

  const deletedWorkers = allWorkers.filter( item => item.id != url2)

    write('workers.json', deletedWorkers)
    res.end('worker deleted')
    return
}

})


server.listen(8000, console.log('server running on port 8000'))