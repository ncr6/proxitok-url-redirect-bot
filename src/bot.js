const { Telegraf } = require('telegraf');

const config = require('./config');
const { rwHandler, downloadHandler } = require('./handlers');
const { info_messages } = require('./locales');

const bot = new Telegraf(config.telegram_token);

bot.start((ctx) => ctx.reply(info_messages.welcome));
bot.help((ctx) => ctx.reply(info_messages.helpmsg));

bot.command('rw', rwHandler);
bot.command('download', downloadHandler);

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));