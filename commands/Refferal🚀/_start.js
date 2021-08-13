/*CMD
  command: /start
  help: 
  need_reply: false
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
var Ch1 = Bot.getProperty("Ch1")
var Ch2 = Bot.getProperty("Ch2")
var Ch3 = Bot.getProperty("Ch3")
var button = [{ title: "✅Joined", command: "✅Joined" }]
Bot.sendInlineKeyboard(button,"💵You must join all channel - __💵 Payouts Channel__ "+Ch2+"\n __OTP Channel__ "+Ch3+"\n __Airdrop Channel__ "+Ch1+"\nBefore Starting Using This Bot\n\nAfter that, click ✅JOINED. must know that before withdraw you have to give otp from "+Ch3+""
)
function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
Bot.sendMessage("❌You're Trying To Refer Your Self")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
  var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  balance.add(0)
  Bot.sendMessageToChatWithId(refUser.chatId, "*🏧 New Referral Reward if user join our channel*")
}

function doAlreadyAttracted() {
  Bot.sendMessage("*❌You Have Already Started This Bot*")
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions)

let welco = User.getProperty("welco")
if (welco == undefined) {
  let tota = Libs.ResourcesLib.anotherChatRes("tota", "global")
  tota.add(1)

  User.setProperty("welco", user.telegramid, "text")
  return
}
Api.sendMessage({ text: 'hi',
reply_markup: JSON.stringify({
hide_keyboard: true
})
})

