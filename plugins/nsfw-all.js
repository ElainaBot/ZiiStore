let handler = async (m, { conn, command }) => {
let nyenye = `https://zenzapis.xyz/api/morensfw/${command}?apikey=${zenzkey}`
    conn.sendButtonImg(m.chat, nyenye, 'Nih', wm2, 'Next', `.${command}`, m) 
}
handler.help = handler.help = ['HGHGHGH']
handler.tags = ['nsfw']
handler.command = /^CGHHGH$/i
//buatan hyzer, jgn hapus atuh 😊
module.exports = handler
