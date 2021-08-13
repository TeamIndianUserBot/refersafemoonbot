/*CMD
  command: Time⏱️

  <<HELP

  HELP
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let time = new Date().toLocaleString("en-US", {
  timeZone: "Asia/kolkata"
})
Bot.sendMessage(time)
