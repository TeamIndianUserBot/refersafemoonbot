/*CMD
  command: lo

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

var msg_id = options.result.message_id; Bot.editMessage("hi",msg_id)
