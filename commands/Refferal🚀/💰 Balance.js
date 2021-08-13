/*CMD
  command: 💰 Balance
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
var currency = Bot.getProperty("currency")
let balance = Libs.ResourcesLib.userRes("balance")
Bot.sendMessage("💰 Your Balance : \n\n" + balance.value().toFixed(3) + " "+currency)
