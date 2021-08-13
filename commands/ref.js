/*CMD
  command: ref
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var cur = Bot.getProperty("currency")
let bonus = Bot.getProperty("Bonus")
function canRun(){
  var last_run_ag = User.getProperty("last_run_ag");
  if(!last_run_ag){ return true }
   return
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_ag", Date.now(), "integer");
var referrer = Libs.ReferralLib.currentUser.attractedByUser()
if (referrer) {
  var referrerRes = Libs.ResourcesLib.anotherUserRes(
    "balance",
    referrer.telegramid
  )
  referrerRes.add(+bonus)
  var refcom = Libs.ResourcesLib.anotherUserRes("refcom", referrer.telegramid)
  refcom.add(+bonus)
  Bot.sendMessageToChatWithId(referrer.telegramid, "*Your refferal registered so you got* "+bonus+" "+cur+"")
} else {
  Bot.sendMessage()
}
