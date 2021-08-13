/*CMD
  command: ChangeBal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel🥳
  answer: - Send his telegram id
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin"+user.telegramid)
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
if(user.telegramid == admin){
User.setProperty("TgidB", message, "string")
Bot.runCommand("Change2")
}else{
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
Bot.sendMessage("⛔️ You Are Not An Admin")
}
