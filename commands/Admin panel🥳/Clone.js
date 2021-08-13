/*CMD
  command: Clone
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel🥳
  answer: Send mail
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin"+user.telegramid)
if (user.telegramid == ""+admin+""){
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("Done!!")
} else {
Api.sendMessage({text :"❌You Are Not Admin"})
}
