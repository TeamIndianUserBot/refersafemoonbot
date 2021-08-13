/*CMD
  command: /on
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin panel🥳
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == admin){
Bot.setProperty("mode","On","string")
Bot.sendMessage("*♻️ Maintainance Mode Set To On*")
}else{
Bot.sendMessage("*⛔️ You Are Not An Admin*")
}
