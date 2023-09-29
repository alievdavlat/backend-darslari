 const telegramBot = require('node-telegram-bot-api')
const keyboards = require('./helpers/keyboards')
const keyboards_text = require('./helpers/keyboards_text')


const bot = new telegramBot('6329729345:AAEASm0hlvwlElI3nMQXOHsmaJNundA5Tt4', {
  polling:true
 })


bot.onText(/\/start/, msg => {
  
  const chatId = msg.chat.id

  bot.sendMessage(chatId, `hello  ${msg.from.first_name}`, {
    reply_markup : JSON.stringify({
      keyboard: keyboards.info,
      resize_keyboard: true
    })
  })

 })


bot.on('message', msg => {
  const chatId = msg.chat.id

  if (msg.text == 'search 🔍') {
    bot.sendMessage(chatId, `sizni qiziqtrgan kitob nomini kirting`)
   
  }


  if (msg.text == 'categories #️⃣') {

      bot.sendMessage(chatId, `${msg.from.first_name} sizning so'rovingiz natijasida toplgan categoriyalar`, {
        reply_markup : JSON.stringify({
          keyboard : keyboards.alldata,
        
          resize_keyboard:true
        })
      })
  }

//   if (msg.text == 'previus ⏮️') {
//     bot.sendMessage(chatId, `main menu`, {
//       reply_markup : JSON.stringify({
//         keyboard: keyboards.info,
//         resize_keyboard: true
//       })
//     })
  
  
//   }
  

  
//  })

//  bot.on('message', msg => {
//   const chatId = msg.chat.id

//   const foundedbooks = keyboards_text.find(bookText = bookText.text == msg.text)


//   if (foundedbooks) {

//       bot.sendPhoto(chatId, 'https://firebasestorage.googleapis.com/v0/b/telegram-bot-145eb.appspot.com/o/%D0%91%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.jfif?alt=media&token=2867550d-b004-456d-815f-94e5e37665e5',{
//         caption: `
//         <strong>muolif : agatha kristi </strong>
//         `,
//         parse_mode:"HTML",
//         reply_markup:{
//           inline_keyboard:[
//             [
//               {
//                 text:'kitob',
//                 callback_data:'kitob_data'
//               }
//             ]
//           ]
//         }
//       })
//   }

//  })


//  bot.on('callback_query', msg => {
  
//   if(msg.data == 'kitob_data'){
//     bot.sendMessage(msg.message.chat.id, 'yoq nahuy kitob qotagm oqi undan kora', )
//   }

  
 })