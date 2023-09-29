const keyboardText = require('./keyboards_text')
const alldata = require('../model/books')

// for( let i = 0 ; i < alldata.length ; i += 3 ) {
//   let arr  = []

//   arr.push( { text: alldata[i].text }, alldata[i + 1] ? { text: alldata[i + 1].text } : null )

//   alldata.push(arr.filter( e => e ))
// }

console.log(alldata);



module.exports = { 
  info : [
   [
    keyboardText.categories,
    keyboardText.popular,
    keyboardText.search
   ],
    [
      keyboardText.recomend,
      keyboardText.audioBooks
    ]
  ],
  alldata: alldata
 
 
}