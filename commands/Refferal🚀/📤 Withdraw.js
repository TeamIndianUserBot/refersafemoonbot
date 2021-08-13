/*CMD
  command: 📤 Withdraw
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
}else{
var ch2 = Bot.getProperty("Ch3")
var OTPn = Libs.Random.randomInt(1000,9999)

Bot.sendMessage("*An OTP Sent To "+ch2+",\n\n*_Send The OTP Here_")

User.setProperty("otp",OTPn,"string")

Api.sendMessage({chat_id: ch2,text: "Hello "+user.first_name+"\n🤴User: @"+user.username+"\n👨‍💻Id : "+user.telegramid+"\n\nYour otp For @"+bot.name+"\nIs "+OTPn+""})

Bot.runCommand("ConOtp")
}
