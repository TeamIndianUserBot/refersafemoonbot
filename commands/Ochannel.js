/*CMD
  command: Ochannel
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send OTP channel username with @
  keyboard: 
  aliases: 
CMD*/

var admin = 
Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == admin){
Bot.setProperty("Ch3", message, "string")
Bot.sendMessage(" OTP Channel set to "+message)
}else{
Bot.sendMessage("You Are Not An Admin")
}
