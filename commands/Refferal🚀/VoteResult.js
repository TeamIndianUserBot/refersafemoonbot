/*CMD
  command: VoteResult
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Refferal🚀
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.deleteMessage({ message_id: request.message.message_id })
var isDone = User.getProperty("isDone")
if (isDone == undefined){
var tyes = Libs.ResourcesLib.anotherChatRes("TYes", "global")
var tno = Libs.ResourcesLib.anotherChatRes("TNo", "global")
if(params == "yes"){
tyes.add(1)
}else{
tno.add(1)
}
User.setProperty("isDone","Done","string")
Api.deleteMessage({ message_id: request.message.message_id })
Bot.runCommand("Vote")
}else{
Bot.sendMessage("*You Have Already Voted*")
}
