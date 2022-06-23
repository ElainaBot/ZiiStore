let handler = async m => m.reply(`
╭─㉿ 〔⫹⫺ MENU JASA BERBER〕 ㉿──
┃⫹⫺ Gober
┃⫹⫺ Danaber
┃⫹⫺ Ovober
┃⫹⫺ Linkber
┃⫹⫺ BTber (TT ber)
└─────────────㉿

╭──〔  THANKS TO  〕─⬣
⫹⫺ Allah SWT
⫹⫺ Orang Tua
⫹⫺ Kesabaran
⫹⫺ Penyemangat
⫹⫺ Nurutomo
⫹⫺ Ilmanhdyt
⫹⫺ Elyas
⫹⫺ Hyzer
⫹⫺ KrizynOfc
⫹⫺ RielgansOfc
⫹⫺ ArullOfc
⫹⫺ Zii-ID
╰─────────────⬣
`.trim()) // Tambah sendiri kalo mau

handler.help = ['jasaberber']
handler.tags = ['store']
handler.command = /^jasaberber$/i
handler.register =false

module.exports = handler
