/*CMD
  command: 🤖Version
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Refferal🚀

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

Bot.runCommand("Hebxh")
var wallet = User.getProperty("0.1")
  if (wallet == undefined) {
    Bot.sendMessage("*You bot is not updated to latest version - 0.1*")
}else{
Bot.sendMessage("Bot is already up - to - date")
}
