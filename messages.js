const prefix = '.';

module.exports = async (client, m) => {
    try {
        const body = (
            (m.type === 'chat' && m.body) ||
            (m.type === 'image' && m.caption) ||
            (m.type === 'video' && m.caption) ||
            (m.type === 'document' && m.caption) ||
            (m.type === 'buttons_response' && m.selectedButtonId) ||
            (m.type === 'list_response' && m.singleSelectReply.selectedRowId)
        ) || '';

        const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';

        if (command === "tombol") {
             const buttons = [
               {buttonId: 'id1', buttonText: {displayText: 'Tombol 1'}, type: 1},
               {buttonId: 'id2', buttonText: {displayText: 'Tombol 2'}, type: 1},
            ];
           const buttonMessage = {
            text: "Pilih salah satu tombol:",
            buttons: buttons,
            headerType: 1
           }
            client.sendMessage(m.from, buttonMessage, {quoted: m});
        }

    } catch (err) {
        console.error("Error:", err);
    }
};
