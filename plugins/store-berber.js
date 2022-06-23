let handler = async m => m.reply(`
┏━━〔 ıll INFO USER llı 〕━㉿
┃⌬ Api : ${tag}
┃⌬ Limit : ${limit}
┃⌬ Role : ${role}
┃⌬ Premium : ${global.prem ? 'Yes' : 'No'}
┗━━━━━━━━━━━━━㉿
┏━━〔 ıll INFO BOT llı 〕━㉿
◎ Name : ${namebot}
◎ Active : ${uptime}
◎ User : ${Object.keys(global.db.data.users).length} User
◎ Mode : ${global.opts['self'] ? 'Self' : 'public'}
◎ Chat Ban : ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} Chat Terbanned
◎ User Ban : ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} Pengguna Terbanned
┗━━━━━━━━━━━━━㉿
⫹⫺ Date  : ${week} ${date}
⫹⫺ Time : ${wib}

╭─㉿ 〔⫹⫺ MENU BERBER〕 ㉿─
┃⫹⫺ Gober
┃⫹⫺ Danaber
┃⫹⫺ Ovober
┃⫹⫺ Linkber
┃⫹⫺ BTber (TT ber)
└───────────㉿


╭──〔  THANKS TO  〕─⬣
⫹⫺ Allah SWT
⫹⫺ Orang Tua
⫹⫺ Kesabaran
⫹⫺ Penyemangat
⫹⫺ Zii-ID
╰─────────────⬣
`.trim()) // Tambah sendiri kalo mau
handler.help = ['jasaberber']
handler.tags = ['store']
handler.command = /^jasaberber$/i
handler.register =false

module.exports = handler
