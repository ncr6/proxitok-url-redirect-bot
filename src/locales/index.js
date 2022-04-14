const { language } = require('../config');

const supportedLangs = ["es", "en"];

if (!supportedLangs.includes(language)) {
    console.error(`Language ${language} is not supported. Falling back to English.`);
    language = "en";
}

module.exports = { 
    info_messages: require(`./${language}`),
}