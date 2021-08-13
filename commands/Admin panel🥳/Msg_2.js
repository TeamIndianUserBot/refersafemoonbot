/*CMD
  command: Msg_2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel🥳
  answer: Send The Message
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin")
if(user.telegramid == admin,1346988671){
var tg =
User.getProperty("MsgId")
Bot.sendMessage("*Message:* "+message+"*\n Has been sent*")
Bot.sendMessageToChatWithId(tg, "*Admin Has Messaged You\n=======================*\n\n_"+message+"_")
}else{
Bot.sendMessage("You Are Not An Admin")
}
