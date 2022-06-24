let handler = async m => m.reply(`
𒆜#Format Order

⏳Time: %hour_of_day%:%minute%
📅Date: %day_of_week% %day_of_month% %month_name% %year%

➥ Paket Games :
➥ Nickname :
➥ UserID :
➥ Top Up :
➥ Harga :
➥ Pembayaran :

*_SERTAKAN BUKTI PEMBAYARAN NY._*
*_INGAT!!!, ISI FORMULIR LALU KIRIM KE ADMIN CHAT PRIBADI!!. `.${numberowner}`_*
`.trim()) // Tambah sendiri kalo mau

handler.help = ['formatorder']
handler.tags = ['gamestore']
handler.command = /^(formatorder|format order)$/i
handler.register =false

module.exports = handler
