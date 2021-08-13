/*CMD
  command: Send
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var keyboard = [
    [{
        text: "Send Phone Number",
        request_contact: true
    }]
]
Api.sendMessage({
    text: "📌 Share Your Number For Phone Verification\n\n⚠️ Note = We Will Be Not Share Your Details To Anybody",
    parse_mode: "html",
    reply_markup: {
        keyboard: keyboard,
        resize_keyboard: false // for big buttons
    }
});
