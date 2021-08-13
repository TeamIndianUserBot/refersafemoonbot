/*CMD
  command: ConOtp
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Refferal🚀
  answer: 
  keyboard: 
  aliases: 
CMD*/

var otp = User.getProperty("otp")
if(message == otp){
Bot.sendMessage("*Otp Correct\nYou Can Now Withdraw*")
Bot.runCommand("Withdraw")

}else{
Bot.sendMessage("Wrong Otp Entered")
Bot.sendMessage("Type The Otp Again")
Bot.runCommand("ConOtp")
}
