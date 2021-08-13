/*CMD
  command: Send voice
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter a text
  keyboard: 
  aliases: 
CMD*/

Api.sendAudio({audio: +data.message,caption: "Your voice here"})
Bot.sendMessage("Pls see")
