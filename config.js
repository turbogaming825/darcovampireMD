//═══════[© 2022 Xeon Bot Inc.]════════\\

//~you can re-upload but tag my channel
//or put my channel link in the description.
//~you can recode or copy the codes but give
//credit.
//~Thank you to LORD BUDDHA, ME AND MY 
//FAMILY.

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapi.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //thank you to zenz
}

//═══════[modification]════════\\
global.owner = ['917373104400'] 
global.pemilik = ['917373104400'] 
global.premium = ['917373104400'] 
global.pengguna = 'Darco AND Vampire' //username
global.botnma = 'DARCO VAMPIRE Bot-MD' //bot name
global.ownernma = 'DARCO AND VAMPIRE' //owner name
global.packname = 'DARCO VAMPIRE Bot' //sticker package name
global.author = 'By Darco And Vampire' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '⭔' //design
global.mess = {
    success: 'Dᴏɴᴇ Tʜᴇ Jᴏʙ✓',
    admin: 'Tʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ʙᴇ ᴜꜱᴇᴅ ʙʏ ᴀᴅᴍɪɴ ᴏɴʟʏ!',
    botAdmin: 'ʙᴏᴛ ᴍᴜꜱᴛ ʙᴇ ᴀᴅᴍɪɴ ᴛᴏ ᴜꜱᴇ ᴛʜᴀᴛ ᴄᴏᴍᴍᴀɴᴅ!',
    owner: 'Tʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ɪꜱ ꜰᴏʀ ᴏɴʟʏ ᴏᴡɴᴇʀ ᴏꜰ ᴛʜᴇ ʙᴏᴛ',
    group: 'Fᴇᴀᴛᴜʀᴇ ɪꜱ ᴜꜱᴇᴅ ꜰᴏʀ ᴏɴʟʏ ɢʀᴏᴜᴘꜱ!',
    private: 'Fᴇᴀᴛᴜʀᴇ ᴄᴀɴ ʙᴇ ᴜꜱᴇᴅ ɪɴ ᴏɴʟʏ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ!',
    bot: 'Tʜɪꜱ ꜰᴇᴀᴛᴜʀᴇ ɪɴ ᴏɴʟʏ ꜰᴏʀ ᴛʜᴇ ʙᴏᴛ ɴᴜᴍʙᴇʀ',
    wait: '𝑰𝒏 𝒑𝒓𝒐𝒄𝒆𝒔𝒔... 𝑷𝒍𝒆𝒂𝒔𝒆 𝑾𝒂𝒊𝒕 𝑨 𝒎𝒊𝒏𝒖𝒕𝒆..',
    endLimit: '𝒀𝒐𝒖𝒓 𝑫𝒂𝒊𝒍𝒚 𝑳𝒊𝒎𝒊𝒕 𝑯𝒂𝒔 𝑬𝒙𝒑𝒊𝒓𝒆𝒅, 𝑻𝒉𝒆 𝑳𝒊𝒎𝒊𝒕 𝑾𝒊𝒍𝒍 𝑩𝒆 𝑹𝒆𝒔𝒆𝒕 𝑬𝒗𝒆𝒓𝒚 12 𝑯𝒐𝒖𝒓𝒔',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100 //free user limit
}
global.thumb = fs.readFileSync('./XeonMedia/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
