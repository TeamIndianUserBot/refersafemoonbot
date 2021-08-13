/*CMD
  command: 💼 Set Wallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Refferal🚀
  answer: 
  keyboard: 
  aliases: 
CMD*/

var currency = Bot.getProperty("currency")
let wallet = User.getProperty("TRXtweetwallet")
var button = [{ title: "Set Or Change Wallet", command: "SOCWal" }]
Bot.sendInlineKeyboard(
  button,
  "*🏧 Wallet : \n" +
    wallet +"\n\n💳 Click the Set Or Change Wallet button before sending your "+currency+" Wallet Address*"
)
