let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : SxyooBotz
*✉️ Nama RL* : Aji
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 1 SEPTEMBER 2004
*🎨 Umur* : 18
*🧮 Kelas* : 12/3 SMA
*🧩 Hobby* : Nonton Hanime, Chatting, Recode script bot
*💬 Sifat* : Idiot, Tidak Ramah, Kanjut, Prik, Pedofil
*🗺️ Tinggal* : Indo, NTB. Mataram
*❤️ Suka* : warnah kuning & biru, Hanime, waifu, loli, trap, furry, kucing
*💔 Benci* : autis, anak epep, seleb

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @ahmdzakaria47
*🇫  Facebook* : Kontol
*🏮 Chanel Youtube* : https://youtube.com/channel/UCJNi-zXIsky4nheONnxoY1w
*🐈 Github:* RamaBotz9

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
