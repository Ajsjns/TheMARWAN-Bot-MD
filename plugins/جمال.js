let handler = async (m, { conn, command, text }) => {
let beauty = `▣──────────────────
│
*▣─❧ ✨🤍 نسبة الجمال 🤍✨*
  *نسبة جمال ${text} 🤍✨*
*${Math.floor(Math.random() * 100)}%* *من 100%*
│
▣──────────────────
`.trim()
m.reply(beauty, null, { mentions: conn.parseMention(beauty) })}
handler.help = ['✓ ◡̈⃝ ✓│جمال🧸💜']
handler.tags = ['game']
handler.command = /^(جمال)$/i
export default handler
