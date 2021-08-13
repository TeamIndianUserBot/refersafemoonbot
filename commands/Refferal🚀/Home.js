/*CMD
  command: Home
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Refferal🚀
  answer: 🔱*Main Menu*
  keyboard: Account 🏦 \n Bonus 🎁 , Referral 🔗 \n Support 📞, Statistics 📊, 🤖Update\n, 👨‍💻Admin Panel, 🤖Version,Vote
  aliases: back ↩️
CMD*/

var mode = Bot.getProperty("mode")
if(mode == "On"){
Bot.sendMessage("*⛔️ Bot Is Currently In Maintainace Mode. Turn It Off To Use.\n\n➡️ Go To Admin Panel > Maintainace > Off.*")
return
}
Bot.runCommand("ref")
