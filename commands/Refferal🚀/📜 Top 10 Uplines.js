/*CMD
  command: 📜 Top 10 Uplines
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
let msg = "✨* This are the Top 10 Uplines with most Users Referred : \n\n*"
let users = Libs.ReferralLib.topList.get(11)

for (var index in users) {
  let u = users[index]
  msg += "@" + u.username + " : " + u.count + "\n"
}

Bot.sendMessage(msg)
