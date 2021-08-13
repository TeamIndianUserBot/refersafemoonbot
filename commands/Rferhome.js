/*CMD
  command: Rferhome
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = [[{text:"💵Account",callback_data:"Acc"},{text:"📛Bonus",callback_data:"Bon"}],[{text:"🔗Refer",callback_data:"Rf"},{text:"👨‍💻Admin",callback_data:"Just a test"}],[{text:"📖 Support",callback_data:"Support 📞"},{text:"🆓Update",callback_data:"1000u"}],[{text:"📛 Statistics",callback_data:"Stats"},{text:"🆓Version",callback_data:"Vrs"}]]
var id = request.message.message_id
var rxt = "*💵Welcome to main menu*"
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:rxt,reply_markup:{inline_keyboard:key}
})
