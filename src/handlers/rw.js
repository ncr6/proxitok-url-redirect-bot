const { ReplyBuilder } = require('../builders');
const { info_messages } = require('../locales');

module.exports = (ctx) => {
    let reply = '';

    reply += ReplyBuilder.getReply(ctx.message.text);
    reply += ReplyBuilder.getReply(ctx.message.reply_to_message?.text);

    ctx.reply(reply ? reply : info_messages.videoid_not_found);
}