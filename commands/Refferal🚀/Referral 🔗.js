/*CMD
  command: Referral 🔗
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Refferal🚀
  answer: *Referral Details*
  keyboard: 👑 My Upline \n 🔗 My Referral Link , 📃 My Referral List(s) \n 📜 Top 10 Uplines \n Back ↩️
  aliases: 
CMD*/

var mode = Bot.getProperty("mode")
if(mode == "On"){
Bot.sendMessage("*⛔️ Bot Is Currently In Maintainace Mode. Turn It Off To Use.\n\n➡️ Go To Admin Panel > Maintainace > Off.*")
return
}
