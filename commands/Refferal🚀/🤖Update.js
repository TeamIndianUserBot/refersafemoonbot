/*CMD
  command: 🤖Update
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Refferal🚀

  <<ANSWER
Send this -
`Parthapratim Das`
  ANSWER
  keyboard: 
  aliases: 
CMD*/

let msg = data.message

if (msg.length == 16) {
  User.setProperty("0.1", msg, "text")
  Bot.sendMessage("✅Owner name is correct: \n" + data.message + "")
Bot.runCommand("Home")
  return
}
Bot.sendMessage("❌Owner name is wrong")
