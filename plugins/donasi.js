let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [6285853570297]
│ • KALO UDAH TF SS GOBLOK😒
╰────

╭─「 Donasi • Non Pulsa 」
│ • DANA : 6285707645429
│ • KALO UDAH TF SS GOBLOK😒
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler