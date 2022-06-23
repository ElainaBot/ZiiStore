//percobaan
let handler = async (m, { conn, command, text }) => {
  let nyenye = `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}` 
conn.sendBut(m.chat, nyenye, wm2, 'Format Order', 'huuu', `.${command}`, m)
}
handler.help = ['freefire', 'mobilelegends', 'speedsdrifters', 'pubg', 'arenaofvalor', 'leagueoflegends', 'apexlegends', 'genshinimpact', 'honkaiimpact3', 'callofduty', 'onepunchman', 'payment', 'formatorder', 'promo', 'infoupdate', 'tutorial']
handler.tags = ['store']
handler.command = /^gamestore$/i
