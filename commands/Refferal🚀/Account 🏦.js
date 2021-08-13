/*CMD
  command: Account 🏦
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Refferal🚀
  answer: 🏦 *Welcome to your Account* 🏦
  keyboard: 🔰 My Telegram Details \n 💰 Balance \n 💼 Set Wallet, 📤 Withdraw \n Back ↩️
  aliases: 
CMD*/

var mode = Bot.getProperty("mode")
if(mode == "On"){
Bot.sendMessage("*⛔️ Bot Is Currently In Maintainace Mode. Turn It Off To Use.\n\n➡️ Go To Admin Panel > Maintainace > Off.*")
return
}
