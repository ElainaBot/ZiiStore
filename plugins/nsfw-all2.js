let handler = async (m, { conn, command }) => {
let nyenye = `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`
    conn.sendButtonImg(m.chat, nyenye, 'Nih', wm2, 'Next', `.${command}`, m) 
}
handler.help = handler.help = ['HGHGHGH']
handler.tags = ['nsfw']
handler.command = /^GHGHHGe$/i
//buatan hyzer, jgn hapus atuh 😊
module.exports = handler
