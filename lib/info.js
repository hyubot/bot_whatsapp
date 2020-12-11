exports.info = (id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `*MENU ${XPTN}*
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
┷┯ ☾ *About ${XPTN}* ☽
   ╽
   ┠❥ Author : Wahyu L
   ┠❥ Designer : Wahyu L
   ┠❥ YouTube : Valid
   ┠❥ Saweria : Valid
   ╽
┯┷ ☾ Sosmed Admin ☽
╽
┠❥ *Group WhatsApp*
┠❥  ${groupwa}
┠❥ *YouTube <subscribe>*
┠❥  ${youtube}_
┠❥ *Instagram <Follow>*
┠❥  ${instagram}
┠❥ *Creator ${XPTN}*
┠❥ ${nomer}
┷┯`
}
