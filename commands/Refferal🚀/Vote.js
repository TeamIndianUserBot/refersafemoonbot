/*CMD
  command: Vote
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Refferal🚀
  answer: 
  keyboard: 
  aliases: 
CMD*/

var tyes = Libs.ResourcesLib.anotherChatRes("TYes", "global")
var tno = Libs.ResourcesLib.anotherChatRes("TNo", "global")
var but = [[{title: "💠Yes "+tyes.value()+"", command: "VoteResult yes"},{title: "🙅‍♂️No "+tno.value()+"",command: "VoteResult no"}]]
Bot.sendInlineKeyboard(but,"*Is this bot GOOD*")
