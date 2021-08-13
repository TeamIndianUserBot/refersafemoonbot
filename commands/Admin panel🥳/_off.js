/*CMD
  command: /off
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin panel🥳
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == admin){
Bot.setProperty("mode","Off","string")
Bot.sendMessage("*♻️ Maintainance Mode Set To Off*")
}else{
Bot.sendMessage("*⛔️ You Are Not An Admin*")
}
