//percobaan
let handler = async (m, { conn, command, text }) => {
  let anu = handler.help = ['freefire', 'mobilelegends', 'speedsdrifters', 'pubg', 'arenaofvalor', 'leagueoflegends', 'apexlegends', 'genshinimpact', 'honkaiimpact3', 'callofduty', 'onepunchman', 'payment', 'formatorder', 'promo', 'infoupdate', 'tutorial']
conn.sendBut(m.chat, anu, wm2, 'Format Order', 'huuu', `.${command}`, m)

}
handler.help = ['gamestore']
handler.tags = ['store']
handler.command = /^gamestore$/i
