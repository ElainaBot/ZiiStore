let handler = async (m, { conn, command }) => {
let nyenye = `https://api-reysekha.herokuapp.com/api/wallpaper/${command}?apikey=APIKEY`
    conn.sendButtonImg(m.chat, nyenye, 'Nih', wm2, 'Next', `.${command}`, m) 
}
handler.help = ['gamestore', 'rekber', 'jaspost']
handler.tags = ['store']
handler.command = /^MALES$/i
//buatan hyzer, jgn hapus 🗿
module.exports = handler
