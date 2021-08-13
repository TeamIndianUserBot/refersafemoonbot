/*CMD
  command: 📃 My Referral List(s)
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
// Automatic fix
var refList

// Automatic fix
var refList

// Automatic fix
var refList

// Automatic fix
var refList

// Automatic fix
var refList

var i

let lib = Libs.ReferralLib

refList = lib.currentUser.refList.get()

let msg
if (refList.length > 0) {
  msg = "👥 *Total Referred User : *" + refList.length + "\n"
  for (i in refList) {
    user = refList[i]
    msg += "\n👤 *User : *" + " @" + user.username + ""
  }
} else {
  msg = "*You don't have any referral yet*"
}
Bot.sendMessage(msg)
