/*CMD
  command: Info
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel🥳
  answer: Pls forward a message
  keyboard: 
  aliases: 
CMD*/

if (!request.forward_from) {
var buttons = [[{ title: "✅ Join Official Channel ✅", url: "https://t.me/payoutschannelofficial" }]]
  Bot.sendInlineKeyboard(buttons, "*✅ Your Infomation Below \n\n 🤴🏻 First Name : "+user.first_name+"\n\n👨‍👩‍👦 Last Name : "+user.last_name+"\n\n 🆔 User Id : "+user.telegramid+"\n\n 👓 User Name : @"+user.username+" \n\n 🔠 Language Code : "+user.language_code+"*")
 return
}
var id = request.forward_from.id
var uname = request.forward_from.last_name
var yname = request.forward_from.username
var name = request.forward_from.first_name
var lcode = request.forward_from.language_code
var buttons = [[{ title: "✅ Join Official Channel ✅", url: "https://t.me/payoutchannelofficial" }]]
 Bot.sendInlineKeyboard(buttons, "✅ * User Infomation Below  \n\n 🤴🏻 First Name : "+name+"\n\n👨‍👩‍👦 Last Name : "+uname+"\n\n 🆔 User Id : "+id+"\n\n 👓 User Name : @"+yname+" \n\n 🔠 Language Code : "+lcode+"\n*")
if (!request.forward_from) {
var buttons = [[{ title: "✅ Join Official Channel ✅", url: "https://t.me/Payoutchannelofficial" }]]
  Bot.sendInlineKeyboard(buttons, "*✅ Your Infomation Below \n\n 🤴🏻 First Name : "+user.first_name+"\n\n👨‍👩‍👦 Last Name : "+user.last_name+"\n\n 🆔 User Id : "+user.telegramid+"\n\n 👓 User Name : @"+user.username+" \n\n 🔠 Language Code : "+user.language_code+"*")
 return
}
var id = request.forward_from.id
var uname = request.forward_from.last_name
var yname = request.forward_from.username
var name = request.forward_from.first_name
var lcode = request.forward_from.language_code
var buttons = [[{ title: "✅ Join Official Channel ✅", url: "https://t.me/PR_bots_update" }]]
 Bot.sendInlineKeyboard(buttons, "✅ * User Infomation Below  \n\n 🤴🏻 First Name : "+name+"\n\n👨‍👩‍👦 Last Name : "+uname+"\n\n 🆔 User Id : "+id+"\n\n 👓 User Name : @"+yname+" \n\n 🔠 Language Code : "+lcode+"\n*")

