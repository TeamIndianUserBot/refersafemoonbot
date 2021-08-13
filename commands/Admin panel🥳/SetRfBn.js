/*CMD
  command: SetRfBn
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel🥳
  answer: Send refer bonus
  keyboard: 
  aliases: 
CMD*/

var admin = 
Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == admin){
Bot.setProperty("Bonus", message, "string")
Bot.sendMessage("Refer Bonus set to "+message)
}else{
Bot.sendMessage("You Are Not An Admin")
}
