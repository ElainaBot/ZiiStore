let handler  = async (m, { conn }) => {
  	await m.reply('\n╭─㉿ 〔⫹⫺ MENU GAMESTORE〕 ㉿─\n┃⫹⫺ FreeFire\n┃⫹⫺ MobileLegends\n┃⫹⫺ Pubg\n┃⫹⫺ SpeedsDrifters \n┃⫹⫺ ApexLegends\n┃⫹⫺ GenshinImpact\n┃⫹⫺ HonkaiImpact\n┃⫹⫺ CallOfDutyMobile\n┃⫹⫺ LeagueOfLegends\n┃⫹⫺ ArenaOfValor\n┃⫹⫺ OnePunchMan\n┃⫹⫺ Payment\n┃⫹⫺ FormatOrder\n┃⫹⫺ Promo\n┃⫹⫺ InfoUpdate\n┃⫹⫺ Tutorial _(Cara.Melakukan.Pembelian)_\n└───────────㉿\n╭──〔  THANKS TO  〕─⬣\n⫹⫺ Allah SWT\n⫹⫺ Orang Tua\n⫹⫺ Kesabaran\n⫹⫺ Penyemangat\n⫹⫺ Nurutomo\n⫹⫺ Ilmanhdyt\n⫹⫺ Elyas\n⫹⫺ Hyzer\n⫹⫺ KrizynOfc\n⫹⫺ RielgansOfc\n⫹⫺ ArullOfc\n⫹⫺ Zii-ID\n╰─────────────⬣
')
conn.sendButtonimg(m.chat, reply, wm2, 'next', `.${before}`, m) // Tambah sendiri kalo mau

handler.help = ['gamestore']
handler.tags = ['store']
handler.command = /^gamestore$/i
handler.register =false

module.exports = handler
