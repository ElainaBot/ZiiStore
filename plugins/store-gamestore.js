//percobaan
let handler = async (m, { conn, command, text }) => {
  let anu = `┌─────「 ⫹⫺ MENU GAMESTORE 」
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
└────` 
conn.sendBut(m.chat, anu, wm2, 'Format Order', `.${command}`, m)
}
handler.command = /^gamestore$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler
