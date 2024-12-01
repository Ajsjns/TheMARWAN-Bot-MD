import fs from 'fs';
const handler = async (m, {conn, args}) => {
  const group = m.chat;
  m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group)) 
};
handler.help = ['linkgroup'];
handler.tags = ['group'];
handler.command = /^link|الرابط(gro?up)?$/i;
handler.group = true;
handler.botAdmin = true;
export default handler;
