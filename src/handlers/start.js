const { getInfoMessage } = require('../locales');

module.exports = async (ctx) => {
    ctx.reply(getInfoMessage(ctx, 'welcome'));
}