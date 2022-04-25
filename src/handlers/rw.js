const { ReplyBuilder } = require('../builders');
const { getInfoMessage } = require('../locales');

module.exports = (ctx) => {
    let reply = '';

    reply += ReplyBuilder.getReply(ctx.message.text);
    reply += ReplyBuilder.getReply(ctx.message.reply_to_message?.text);

    ctx.reply(reply ? reply : getInfoMessage(ctx, 'videourl_not_found'));
}