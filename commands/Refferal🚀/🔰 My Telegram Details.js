/*CMD
  command: 🔰 My Telegram Details
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Refferal🚀
  answer: 
  keyboard: 
  aliases: 
CMD*/

var mode = Bot.getProperty("mode")
if(mode == "On"){
Bot.sendMessage("*⛔️ Bot Is Currently In Maintainace Mode. Turn It Off To Use.\n\n➡️ Go To Admin Panel > Maintainace > Off.*")
return
}
Bot.sendMessage(
  "*🔸First name : " +
    user.first_name + 
    "\n\n🔸Username : @" +
    user.username +
    "\n\n🔸User Id : " +
    user.telegramid +
    "\n*"
)
