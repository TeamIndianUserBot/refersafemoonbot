/*CMD
  command: Statistics 📊
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
let tota = Libs.ResourcesLib.anotherChatRes("tota", "global")

Bot.sendMessage("Total users : " + tota.value() + "")
}
