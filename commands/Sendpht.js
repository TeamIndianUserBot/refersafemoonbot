/*CMD
  command: Sendpht

  <<HELP

  HELP
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send his telegram id

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/


  let h =
    "*Now send Me Keyboard buttons for your bot*\n_Send Button formate with_ *comma(,)*\n-> _for next line use_ " +
    inspect("\n") +
    "\n*for example: *" +
    inspect("balance,\nPlan") +
    "\n\n*You can use the bellow variables for contain user informetion in buttons:*\n\n*{balance}* - _For Show user balance_\n*{name}* - _For show username in button_\n*{first_name}* - _For show user first name in button_\n\n*Send me your bot buttons name and style in bellow*"
  Bot.editMessage(h, id)
  Bot.runCommand("/admineditTexronwitbutwel01")
