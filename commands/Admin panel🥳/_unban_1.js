/*CMD
  command: /unban_1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel🥳
  answer: Send telegram ID
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin")
if (user.telegramid == key,1346988671) {
  Bot.setProperty("" + message + "", "unban", "string")
  Bot.sendMessage("User " + message + " has been unbanned successfully")
} else {
  Bot.sendMessage("*You're not the admin*")
}
