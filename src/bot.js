const { Telegraf } = require('telegraf');

const config = require('./config');
const { 
    startHandler, helpHandler, rwHandler, downloadHandler 
} = require('./handlers');


const bot = new Telegraf(config.telegram_token);

bot.start(startHandler);
bot.help(helpHandler);

bot.command('rw', rwHandler);
bot.command('download', downloadHandler);

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));