/*CMD
  command: /brphoto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel🥳
  answer: *🌌 Send Your Photo And Caption For Broadcast.*

  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin")
if(user.telegramid == admin,1346988671){
Bot.runAll({ 
command: "Photo",
for_chats: "private-chats",
options: {photo: request.photo[0].file_id, caption: request.caption}
})
Bot.sendMessage("*🌌 Photo Sended To All Users.*")
}else{
Bot.sendMessage("*⛔️ You're Not An Admin.*")
}
