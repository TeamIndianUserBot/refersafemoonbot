/*CMD
  command: /ads
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ads
CMD*/

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
var times = Libs.ResourcesLib.userRes("ads")
var times2 = Libs.Random.randomInt(2,5);
if(times.value() > ""+times2+""){
times.add(-times2)
var button = [[{title: "Join",url: "https://t.me/payoutchannelofficial"}]]
Bot.sendInlineKeyboard(button,"*#Promotion\n\n PLEASE JOIN OUR CHANNEL*")
}else{
times.add(1)
}
