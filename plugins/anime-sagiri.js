let handler = async (m, { conn }) => {
  conn.sendmessage(m.chat, 'https://api.lolhuman.xyz/api/random/sagiri?apikey=Papah-Chan', '', '', m)
}
handler.help = ['Rekber']
handler.tags = ['store']
handler.command = /^(rekber)$/i

module.exports = handler
