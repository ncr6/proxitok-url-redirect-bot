const { DownloadURLBuilder } = require('../builders');
const { info_messages } = require('../locales');

module.exports = async (ctx) => {
    const reply = await DownloadURLBuilder.getDownloadURL(ctx.message.reply_to_message?.text);
    if (reply) {
        ctx.reply(reply);
    } else if (reply === -1) {
        ctx.reply(info_messages.download_url_request_error);
    } else {
        ctx.reply(info_messages.videoid_not_found);
    }
}