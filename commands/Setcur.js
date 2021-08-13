/*CMD
  command: Setcur
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send your currency 
  keyboard: 
  aliases: 
CMD*/

Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
var admin = 
Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == admin){
Bot.setProperty("currency", message, "string")
Bot.sendMessage("Currency set to "+message)
}else{
Bot.sendMessage("You Are Not An Admin")
}
