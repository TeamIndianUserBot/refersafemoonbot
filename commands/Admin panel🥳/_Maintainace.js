/*CMD
  command: /Maintainace
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin panel🥳
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == admin){
var button = [[{ title : "⏸ On " , command : "/on" },{ title : "▶️ Off" , command : "/off" }]]
var cur = Bot.getProperty("mode")
Bot.sendInlineKeyboard(button, "*♻️ Select Your Choice To On/Off The Maintainace Mode.\n\n💠 Current Mode = "+cur+"*")
}else{
Bot.sendMessage("*⛔️ You Are Not An Admin*")
}
