/*CMD
  command: AddAdmin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel🥳
  answer: Send the Telegram id
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid == 1346988671){
Bot.sendMessageToChatWithId(""+message+"", "*Owner Made You Admin*")
Bot.sendMessage(message+" Promoted")
Bot.setProperty("admin"+message+"",""+message+"","string")
}else{
Bot.sendMessage("You have to Become Owner")
}
