module.exports = {
    getInfoMessage: (ctx, message) => {
        userLang = ctx.update.message.from.language_code;
        supportedLocales = ['en', 'es'];

        if (supportedLocales.includes(userLang)) {
            return require(`../locales/${userLang}`)[message];
        }
    }
};