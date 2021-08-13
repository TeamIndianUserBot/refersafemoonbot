/*CMD
  command: Bonus 🎁
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Refferal🚀
  answer: 
  keyboard: 
  aliases: 
CMD*/

var mode = Bot.getProperty("mode")
if(mode == "On"){
Bot.sendMessage("*⛔️ Bot Is Currently In Maintainace Mode. Turn It Off To Use.\n\n➡️ Go To Admin Panel > Maintainace > Off.*")
return
}
function canRun() {
  var last_run_at = User.getProperty("lastrun_at1")

  if (!last_run_at) {
    return true
  }

  var minutes = (Date.now() - last_run_at) / 1000 / 60

  var minutes_in_day = 24 * 60

  var next = minutes_in_day - minutes

  var wait_hours = Math.floor(next / 60)

  next -= wait_hours * 60

  var wait_minutes = Math.floor(next)

  var seconds = Math.floor((next - wait_minutes) * 60)

  if (minutes < minutes_in_day) {
    Bot.sendMessage(
      "*⏳ You already received your bonus earlier\n\n⌛ Come again later *" +
        wait_hours +
        "* H *" +
        wait_minutes +
        "* M *" +
        seconds +
        "* S *"
    )

    return
  }

  return true
}

if (!canRun()) {
  return
}

User.setProperty("lastrun_at1", Date.now(), "integer")

let balance = Libs.ResourcesLib.userRes("balance")
let bonus = Bot.getProperty("Daily")
balance.add(+bonus)
var currency = Bot.getProperty("currency")

Bot.sendMessage("*Congratulations! you have received *"+bonus+" "+currency)

Bot.run({ command: "/bonready", run_after: 86400 })
