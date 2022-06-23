let handler = async m => m.reply(`
╭──〔  𝐈𝐍𝐅𝐎 𝐔𝐒𝐄𝐑  〕─⬣
┃➵͜͡✪ 𝚄𝚂𝙴𝚁 : *%name*
┃➵͜͡✪ 𝚁𝙴𝙼𝙰𝙸𝙽𝙸𝙽𝙶 𝙻𝙸𝙼𝙸𝚃 : *%limit* 𝙻𝙸𝙼𝙸𝚃
┃
┃──〔  𝐓 𝐎 𝐃 𝐀 𝐘  〕─⬣
┃➵͜͡✪ 𝚃𝙾𝙳𝙰𝚈 : *%week %weton* 
┃➵͜͡✪ 𝙳𝙰𝚃𝙴 : *%date*
┃➵͜͡✪ 𝙳𝙰𝚃𝙴 𝙸𝚂𝙻𝙰𝙼𝙸𝙲 : *%dateIslamic*
┃➵͜͡✪ 𝚃𝙸𝙼𝙴 : *%time*
┃
┃──〔  𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄  〕─⬣
┃➵͜͡✪ 𝚄𝙿𝚃𝙸𝙼𝙴 : *%uptime*
┃➵͜͡✪ 𝙼𝙴𝙼𝙾𝚁𝚈 𝚄𝚂𝙴𝙳 : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
╰─────────────⬣

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
