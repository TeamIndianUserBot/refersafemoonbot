/*CMD
  command: Min
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send minimum withdrawal
  keyboard: 
  aliases: 
CMD*/

var admin = 
Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == admin){
Bot.setProperty("Withdrawalm", message, "string")
Bot.sendMessage("Minimum withdrawal set to "+message)
}else{
Bot.sendMessage("You Are Not An Admin")
}
