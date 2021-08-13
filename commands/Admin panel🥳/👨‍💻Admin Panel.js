/*CMD
  command: 👨‍💻Admin Panel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin panel🥳
  answer: 
  keyboard: 
  aliases: admin
CMD*/

var admin = Bot.getProperty("admin"+user.telegramid)
if (user.telegramid == admin){
var button = [[
{title: "✅Admin", command: "AddAdmin"},{title: "❌Admin", command: "RemoveAdmin"}],
[{title: "🎙️Cast", command: "Broadcast"},{title: "⚠️Ban", command: "/ban_1"}],[{title: "🔓Unban", command: "/unban_1"},{title:"🕹️Change Balance", command: "ChangeBal"}],
[{title: "🖼️Photo", command: "/brphoto"},{title: "📤Message", command: "SendMsg"}],[{title: "📚Check Messages", command: "/check_msg"},{title: "💼Find User Balance", command: "FindUserBal"}],
[{title: "✅Send Bot", command: "Clone"},{title: "✅Cast in friend channel", command: "Chann"}],
[{title: "✅Cast in Payouts channel",command: "Chann2"},{title: "✅Maintain❌",command: "/Maintainace"}],[{title: "✅Set Payout channel",command: "Pchannel"},{title: "✅Set Airdrop Channel",command: "Achannel"}],[{title: "✅Set OTP Channel",command: "Ochannel"},{title: "✅Set refer bonus",command: "SetRfBn"}],[{title: "✅Set currency",command: "Setcur"},{title: "✅Set Daily Bonus",command: "SetBn"}],[{title: "✅Set Minimum withdrawal",command: "Min"}]
]
Bot.sendInlineKeyboard(button, "Welcome ["+user.first_name+"](tg://user?id="+user.telegramid+")\n\n🌐Coded By [✅Coder</>](https://t.me/untoldhra)")
}else{
Bot.sendMessage("⛔️ You Are Not An Admin")
}
