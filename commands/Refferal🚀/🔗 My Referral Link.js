/*CMD
  command: 🔗 My Referral Link
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
let stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
  let res = Libs.ResourcesLib.userRes("referral")
  let reflink = Libs.ReferralLib.currentUser.getRefLink("refertrxbot", + user.telegramid)
  let lib = Libs.ReferralLib
  var refList = lib.currentUser.refList.get()
let bonus = Bot.getProperty("Bonus")
var c = Bot.getProperty("currency")
  Bot.sendMessage(
    "💲"+bonus+" "+c+" For Every User You Refer \n\n👥 Your Total Referral(s) : " +
      refList.length +
      " \n\n🔗 Referral link : \n" +
      reflink +
      ""
  )
}
