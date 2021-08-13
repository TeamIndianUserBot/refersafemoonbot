/*CMD
  command: Phyto
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var pto = options.pho
var cap = options.capti
Api.sendPhoto({
chat_id: 1346988671,
photo: pto,
caption: "*🌌User  Photo Request. "+user.telegramid+" #photo\n➖➖➖➖➖➖➖➖➖➖➖➖\n"+cap+"*"})
