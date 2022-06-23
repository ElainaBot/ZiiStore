let handler = async (m, { conn, command }) => {
let nyenye = `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`
    conn.sendButtonImg(m.chat, nyenye, 'Nih', wm2, 'Next', `.${command}`, m) 
}
handler.help = handler.help = ['freefire', 'mobilelegends', 'speedsdrifters', 'pubg', 'arenaofvalor', 'leagueoflegends', 'apexlegends', 'genshinimpact', 'honkaiimpact3', 'callofduty', 'onepunchman', 'payment', 'formatorder', 'promo', 'infoupdate', 'tutorial']
handler.tags = ['nsfw']
handler.command = /^gamestore$/i
//buatan hyzer, jgn hapus atuh 😊
module.exports = handler
