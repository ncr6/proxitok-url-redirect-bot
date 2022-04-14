const { ShortenedURL, URLMapper } = require('../components');

function ReplyBuilder() {
    this.getReply = (inputText) => {
        reply = '';
        if (inputText) {
            const videoIDs = ShortenedURL.getShortenedVideoIDs(inputText);
            if (videoIDs.length > 0) {
                const urls = URLMapper.buildFromShortenedIDs(videoIDs);
                reply = urls.join('\n');
            }
        }
        return reply;
    }
}

module.exports = new ReplyBuilder();