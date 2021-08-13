/*CMD
  command: FindUserBal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel🥳
  answer: Send His Telegram id
  keyboard: 
  aliases: 
CMD*/

var admin = 
Bot.getProperty("admin")
if(user.telegramid == admin,1346988671){
var b = 
Libs.ResourcesLib.anotherUserRes("balance",message)
Bot.sendMessage("*Balance Of User "+message+" is* "+b.value())
}else{
Bot.sendMessage("You Are Not An Admin")
}
