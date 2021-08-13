/*CMD
  command: /ans
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Refferal🚀
  answer: 
  keyboard: 
  aliases: 
CMD*/

var userAns = params

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}

if (!params) {
  return
} else {
  let ans = User.getProperty("userAns")

  if (userAns == ans) {
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "That's Correct",
      show_alert: false
    })

    Bot.sendMessage("*You are verified*")
    Bot.runCommand("Home")
  } else {
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "That's Wrong",
      show_alert: false
    })

    Bot.sendMessage("Try Again")
  }
}
