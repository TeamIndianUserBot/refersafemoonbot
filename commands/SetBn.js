/*CMD
  command: SetBn
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send daily bonus
  keyboard: 
  aliases: 
CMD*/

var admin = 
Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == admin){
Bot.setProperty("Daily", message, "string")
Bot.sendMessage("Bonus set to "+message)
}else{
Bot.sendMessage("You Are Not An Admin")
}
