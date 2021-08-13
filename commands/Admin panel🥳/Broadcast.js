/*CMD
  command: Broadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel🥳
  answer: Send your message👨‍💻
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == key){
Bot.runAll({ 
command: "broad",
for_chats: "private-chats",
options: {msg: message}
})
}else{
Bot.sendMessage("*🔰 You're Not An Admin*")
}

