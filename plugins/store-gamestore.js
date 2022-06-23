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
╰─────────────⬣`

const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        listMessage: {
            title: `*${ucapan()} ${name}*`,
            description: menuu,
            buttonText: '𝐊𝐋𝐈𝐊 𝐃𝐈𝐒𝐈𝐍𝐈',
            listType: 1,
            footerText: "Zii-ID",
            mtype: 'listMessage',
            sections: [
              {
      
                "rows": [{
                  "title": `☰ ALL MENU`,
                  "description": "Menampilkan Menu All",
                  "rowId": '.? all'
                  }, {
                  "title": "☰ ABSEN MENU",
                  "description": "Menampilkan Menu Absen",
                  "rowId": `${_p}? absen`
                }
], "contextInfo": {
              "stanzaId": m.key.id,
              "participant": m.sender,
              "quotedMessage": m.message
            }
}}), { userJid: m.participant || m.key.remoteJid, quoted: fkontak });
    return await conn.relayMessage(
        m.key.remoteJid,
        template.message,
        { messageId: template.key.id }
    )
    }.trim()) // Tambah sendiri kalo mau

handler.help = ['gamestore']
handler.tags = ['store']
handler.command = /^gamestore$/i
handler.register =false

module.exports = handler
