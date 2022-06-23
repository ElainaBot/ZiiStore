let handler = async m => m.reply(`.${command}`, `
╭─㉿ 〔⫹⫺ MENU GAMESTORE〕 ㉿─
┃⫹⫺ FreeFire
┃⫹⫺ MobileLegends
┃⫹⫺ Pubg
┃⫹⫺ SpeedsDrifters 
┃⫹⫺ ApexLegends
┃⫹⫺ GenshinImpact
┃⫹⫺ HonkaiImpact
┃⫹⫺ CallOfDutyMobile
┃⫹⫺ LeagueOfLegends
┃⫹⫺ ArenaOfValor
┃⫹⫺ OnePunchMan
┃⫹⫺ Payment
┃⫹⫺ FormatOrder
┃⫹⫺ Promo
┃⫹⫺ InfoUpdate
┃⫹⫺ Tutorial (Cara.Melakukan.Pembelian)
└───────────㉿
`.trim()) // Tambah sendiri kalo mau

handler.help = ['gamestore']
handler.tags = ['store']
handler.command = /^gamestore$/i
handler.register =false

module.exports = handler
