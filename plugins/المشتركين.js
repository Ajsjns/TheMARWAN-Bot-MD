let handler = async (m, { conn, isOwner }) => {
let vip = global.db.data.users[m.sender].premium
let prem = Object.entries(global.db.data.users).filter(user => user[1].premium)
let caption = `🎟️ قــائــمــة الــمــشــتــركــيــن VIP
*╭•·–––––––––––––––––––·•*
│ *الــمــجــمــوع : ${prem.length} مستخدم* ${prem ? '\n' + prem.map(([jid], i) => `
│ *${i + 1}.* ${conn.getName(jid) == undefined ? 'Sin فقط' : conn.getName(jid)}
│ ${isOwner ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
*╰•·–––––––––––––––––––·•*\n\n🎟️ مــشــتــرك ⇢ ${vip ? '✅' : '❌'}\n${wm}`
await conn.reply(m.chat, caption, m, { mentions: await conn.parseMention(caption) })
await conn.sendButton(m.chat, caption, `🎟️ مــشــتــرك ⇢ ${vip ? '✅' : '❌'}\n${wm}`, null, [ 
[`${vip ? '✦ الــمــطــوريــن ✦': '✦ اشــتــرك فــي فــلاش بــوت ✦'}`, `${vip ? '.المطور': '.الباقات'}`]], m, { mentions: await conn.parseMention(caption) })
}
handler.command = /^(المشتركين|listpremium)$/i

export default handler
