/*CMD
  command: Photo
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin panel🥳
  answer: 
  keyboard: 
  aliases: 
CMD*/

var pto = options.photo
var cap = options.caption
Api.sendPhoto({
photo: pto,
caption: "*🌌 Admin Photo Broadcast. #photo\n➖➖➖➖➖➖➖➖➖➖➖➖\n"+cap+"*"})
