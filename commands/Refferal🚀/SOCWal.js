/*CMD
  command: SOCWal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Refferal🚀
  answer: Send SAFEMOON address
  keyboard: 
  aliases: 
CMD*/

var mode = Bot.getProperty("mode")
if(mode == "On"){
Bot.sendMessage("*⛔️ Bot Is Currently In Maintainace Mode. Turn It Off To Use.\n\n➡️ Go To Admin Panel > Maintainace > Off.*")
return
}
var currency = Bot.getProperty("currency")
let msg = message
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
  User.setProperty("TRXtweetwallet", msg, "text")
  Bot.sendMessage("✅"+currency+" wallet set to : \n`" + data.message + "`")

