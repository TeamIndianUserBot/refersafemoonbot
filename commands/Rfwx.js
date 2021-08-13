/*CMD
  command: Rfwx
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = [
  [
    { title: "💵Account", command: "Acc" },
    { title: "📛Bonus", command: "Bon" }
  ],
  [
    { title: "🔗Refer", command: "Rf" },
    { title: "👨‍💻Admin", command: "Just a test" }
  ],
  [
    { title: "📖 Support", command: "Support 📞" },
    { title: "🆓Update", command: "1000u" }
  ],
  [
    { title: "📛 Statistics", command: "Stats" },
    { title: "🆓Version", command: "Vrs" }
  ]
]
Bot.sendInlineKeyboard(key, "💵Welcome to main menu")
Bot.runCommand("ref")

