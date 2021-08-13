/*CMD
  command: Phto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send photo you wanted to admin
  keyboard: 
  aliases: 
CMD*/


Bot.runAll({ 
command: "Phyto",
chat_id: "@untoldhra",
options: {pho: request.photo[0].file_id, capti: request.caption}
})
Bot.sendMessage("*🌌 Photo Sended To Admin👨‍💻.*")

