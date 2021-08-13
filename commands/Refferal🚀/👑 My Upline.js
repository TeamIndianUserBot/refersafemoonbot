/*CMD
  command: 👑 My Upline
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
let u = Libs.ReferralLib.currentUser.attractedByUser()
let chanell = Libs.ReferralLib.currentUser.attractedByChannel()
let msg = "*Your Upline is*"

if (u) {
  msg = msg + "user " + "@" + u.username
} else if (chanell) {
  msg = msg + "chanell: " + chanell
} else {
  msg = "*You start this bot without clicking other's link*"
}

Bot.sendMessage(msg)
