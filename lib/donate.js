exports.donate = (id, A187, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
╔════════════════════
║ *Donasi Ke ${WYUBOTS}*
╠════════════════════
║
║├≽️⚜ *PULSA*: _0888-6425-283_
║
╠════════════════════
║  *${WYUBOTS}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${WYUBOTS}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*MADE BY WAHYU BOTS*_
╚════════════════════`
}

