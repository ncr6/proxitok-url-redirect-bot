const { DownloadURLBuilder } = require('../builders');
const { getInfoMessage } = require('../locales');

module.exports = async (ctx) => {
    const reply = await DownloadURLBuilder.getDownloadURL(ctx.message.reply_to_message?.text);
    if (reply) {
        ctx.reply(reply === -1 ? getInfoMessage(ctx,'download_url_request_error') : reply);
    } else {
        ctx.reply(getInfoMessage(ctx, 'videourl_not_found'));
    }
}