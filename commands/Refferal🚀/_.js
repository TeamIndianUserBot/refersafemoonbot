/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Refferal🚀
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.contact){
if(request.contact.phone_number[0] == "1"){
Bot.sendMessage("*⚠️ Fake Account Detected. USA Number Not Allowed.*")
}else{
    Bot.run({
        command: "Home" //Your Command Here 
})
}
}
