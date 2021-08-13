/*CMD
  command: /adminreply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel🥳
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin"+1346988671)
if (user.telegramid != admin) {
  return
}

var option = { reply_to_message_id: options.message_id }
Bot.sendMessageToChatWithId(
  options.userId,
  "*Reply from Admin : \n*" + message,
  option
)

Bot.sendMessage("*Message has been sent to *" + options.user_link)

Bot.runCommand("Home")
