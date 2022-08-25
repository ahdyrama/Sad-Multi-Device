import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*KALAU MAU DAPAT SC KERJA:V*\njangan cmn tinggal ketik  .sc,ingat itu`
conn.sendButtonDoc(m.chat, str, wm, 'Siap Bg','Bilek', ftextt, m)
}
handler.command = handler.help = ['sc']
handler.tags = ['info']

export default handler
