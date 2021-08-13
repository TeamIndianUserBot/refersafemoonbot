/*CMD
  command: auto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Refferal🚀
  answer: 
  keyboard: 
  aliases: 
CMD*/

var withdrawn = Bot.getProperty("totalWithdrawn")
withdrawn = parseFloat(withdrawn)
var wallet = User.getProperty("TRXtweetwallet")
var balance = Libs.ResourcesLib.userRes("balance")
let adb = Bot.getProperty("Withdrawalm")
if (data.message < adb) {
  var currency = Bot.getProperty("currency")
  Bot.sendMessage("*❌ Minimum withdraw is " + adb + " " + currency + " Ok *")
} else {
  if (data.message > balance.value()) {
    Bot.sendMessage(
      "*Maximum withdraw " + balance.value().toFixed(3) + " "+currency+"*"
    )
  } else {
var curreny = Bot.getProperty("currency")
var cih = Bot.getProperty("Ch2")
    let lib = Libs.ReferralLib
    var refList = lib.currentUser.refList.get()
    Bot.sendMessage(
      "*✅ Withdrawal Successfully Requested\n\n💳 Transaction details : Paid \n💰 Amount : " +
        data.message +
        "\n"+curreny+" 💼 Wallet : \n" +
        wallet +
        "\n\n⏰ Withdrawal may process within 2-24 Hours" +
        "\n\n🌹 Payment Channel : \n"+cih+"*"
    )
    balance.add(-data.message)
    Api.sendMessage({
      chat_id: cih,
      text:
        "*🔋New Withdrawal Requested 🏦\n\n◾Status : Pending\n◾User : @" +
        user.username +
        " \n◾User Id : " +
        user.telegramid +
        "\n◾Total Referral(s) : " +
        refList.length +
        "\n◾Amount : " +
        data.message +
        "\n\n💳"+curreny+" Address : \n" +
        wallet +
        "\n\n⛓ TXID : Wait" +
        "\n\n🤖 Bot : @"+bot.name+" *",
      parse_mode: "Markdown"
    })
  }
}

