//percobaan
let handler = async (m, { conn, command, text }) => {
  let anu = '┌─────「 ⫹⫺ MENU GAMESTORE 」\n┃⫹⫺ FreeFire\n┃⫹⫺ MobileLegends\n┃⫹⫺ Pubg\n┃⫹⫺ SpeedsDrifters \n┃⫹⫺ ApexLegends\n┃⫹⫺ GenshinImpact\n┃⫹⫺ HonkaiImpact\n┃⫹⫺ CallOfDutyMobile\n┃⫹⫺ LeagueOfLegends\n┃⫹⫺ ArenaOfValor\n┃⫹⫺ OnePunchMan\n┃⫹⫺ Payment\n┃⫹⫺ FormatOrder\n┃⫹⫺ Promo\n┃⫹⫺ InfoUpdate\n┃⫹⫺ Tutorial (Cara.Melakukan.Pembelian)\n└────'
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
