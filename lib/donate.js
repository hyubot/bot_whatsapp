exports.donate = (id, WahyuBots, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
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
║ *Donasi Ke ${WahyuBots}*
╠════════════════════
║├≽️⚜ *OVO*: _0823-2375-5174_
║├≽️⚜ *PULSA*: _0823-2375-5174_
║├≽️⚜ *GOPAY*: _0823-2375-5174_
╠════════════════════
║  *${WahyuBots}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${WahyuBots}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*MADE BY WAHYUBOTS*_
╚════════════════════`
}

