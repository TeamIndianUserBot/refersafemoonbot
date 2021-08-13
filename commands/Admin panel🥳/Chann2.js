/*CMD
  command: Chann2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel🥳
  answer: Message
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == admin){
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
Api.sendMessage({
      chat_id: "@payoutchannelofficial",
      text: ""+message+""})
Bot.sendMessage("Done")
return
}
Bot.sendMessage("⛔️ You Are Not An Admin")
