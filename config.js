import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

//• ↳𝑺𝑶𝑳𝑶 𝑫𝑬𝑺𝑨𝑹𝑹𝑶𝑳𝑳𝑨𝑫𝑶𝑹𝑬𝑺 𝑨𝑷𝑹𝑶𝑩𝑨𝑫𝑶𝑺
global.owner = [
'165043362652249', 
'527732671011'
] 

//• ↳𝑺𝑶𝑳𝑶 𝑴𝑶𝑫𝑬𝑹𝑨𝑫𝑶𝑹𝑬𝑺!
global.mods = [573223702049]
global.prems = []

//• ↳ ◜𝑴𝑨𝑹𝑪𝑨𝑺 𝑫𝑬 𝑨𝑮𝑼𝑨◞ • 💌
global.emoji = '🍷'
global.emoji2 = '🍷'
global.namebot = '𝐃𝐑𝐀𝐆𝐎 𝐁𝐎𝐓 🍷'
global.botname = '𝐃𝐑𝐀𝐆𝐎 𝐁𝐎𝐓 🍷'
global.banner = 'https://cdn.russellxz.click/3331708f.jpg'
global.packname = '𝐃𝐑𝐀𝐆𝐎 𝐁𝐎𝐓 🍷'
global.author = '© 𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝔍𝒖𝒂𝒏'
global.sessions = '𝐃𝐑𝐀𝐆𝐎 𝐁𝐎𝐓 🍷'

global.APIs = {
may: 'https://mayapi.ooguy.com'
}

global.APIKeys = {
may: 'may-0595dca2'
}

const file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Se actualizó el 'config.js'"))
import(`file://${file}?update=${Date.now()}`)
})
