/*CMD
  command: Acc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var mode = Bot.getProperty("mode")
if (mode == "On") {
  Bot.sendMessage(
    "*⛔️ Bot Is Currently In Maintainace Mode. Turn It Off To Use.\n\n➡️ Go To Admin Panel > Maintainace > Off.*"
  )
  return
}
var key = [[{text:"💵 Balance",callback_data:"Bal"}],[{text:"📖My telegram details",callback_data:"Mydet"}],[{text:"📌Set wallet",callback_data:"Setw"},{text:"👨‍💻Withdraw",callback_data:"withx"}],[{text:"🔙Back",callback_data:"Rferhome"}]]
var currency = Bot.getProperty("currency")
var id = request.message.message_id
var rxt = "*💵Welcome to "+currency+" account*"
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:rxt,reply_markup:{inline_keyboard:key}
})
