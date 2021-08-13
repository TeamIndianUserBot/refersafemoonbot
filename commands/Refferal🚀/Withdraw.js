/*CMD
  command: Withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Refferal🚀
  answer: 
  keyboard: 
  aliases: 
CMD*/

 let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
if (refList.length < 5){
Bot.sendMessage("🔐 You Can't Withdraw Now. It Is Locked Untill Your 5 Referral.")
return
}
let stat = Bot.getProperty("" + user.telegramid + "")
let wdinfo = Bot.getProperty("wdInfo")
if (stat == "ban") {
  Bot.sendMessage("You're ban")
} else {
  let balance = Libs.ResourcesLib.userRes("balance")
  let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
  var wallet = User.getProperty("TRXtweetwallet")
  if (wallet == undefined) {
    Bot.sendMessage("*Wallet not set*")
  } else {
var c = Bot.getProperty("currency")
let adb = Bot.getProperty("Withdrawalm")
    if (balance.value() < adb) {
      Bot.sendMessage("*❌ You have to own at least "+adb+" "+c+" to withdraw*")
    } else {
var cbe = Bot.getProperty("currency")
      Bot.sendMessage("*How many "+cbe+" you want to withdraw?*")
      Bot.runCommand("auto")
    }
  }
}
