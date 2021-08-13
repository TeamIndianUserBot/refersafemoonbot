/*CMD
  command: Bal
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var mode = Bot.getProperty("mode")
if(mode == "On"){
Bot.sendMessage("*⛔️ Bot Is Currently In Maintainace Mode. Turn It Off To Use.\n\n➡️ Go To Admin Panel > Maintainace > Off.*")
return
}
var curr = Bot.getProperty("currency")
let balance = Libs.ResourcesLib.userRes("balance")
var key = [[{text:"🔙Back",callback_data:"Acc"}]]
var id = request.message.message_id
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:"💰 Your Balance : \n\n" + balance.value().toFixed(3) + " "+curr+"",reply_markup:{inline_keyboard:key}
})
