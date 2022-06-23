let handler = async(m, { conn, text }) => {
if (!text) return conn.reply(m.chat, 'Silahkan masukan query', m)
let tetete = `https://api.zacros.my.id/search/alphacoders?query=${text}`
conn.sendButtonImg(m.chat, tetete, `Hasil Dari ${text}`, wm2, 'Thanks', 'thanks', m) 
}
handler.help = ['freefire', 'mobilelegends', 'speedsdrifters', 'pubg', 'arenaofvalor', 'leagueoflegends', 'apexlegends', 'genshinimpact', 'honkaiimpact3', 'callofduty', 'onepunchman', 'payment', 'formatorder', 'promo', 'infoupdate', 'tutorial']
handler.tags = ['gamestore']
handler.command = /^(gamestore)$/i

module.exports = handler
