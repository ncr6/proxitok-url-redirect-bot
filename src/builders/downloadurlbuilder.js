const { ShortenedURL } = require('../components');;
const { HTTPClient } = require('../components');
const { instance_url } = require('../config');

function DownloadURLBuilder() {
    this.getDownloadURL = async (inputText) => {
        let reply, proxitokUrl = '';
        if (inputText) {
            const videoIDs = ShortenedURL.getShortenedVideoIDs(inputText);
            if (videoIDs.length > 0) {
                proxitokUrl = `${instance_url}/@placeholder/video/${videoIDs[0]}`;
                try {
                    const response = await HTTPClient.getDownloadURL(proxitokUrl);
                    reply = instance_url + response;
                } catch (err) {
                    console.error(err);
                    reply = -1;
                }
            }
        }
        return reply;
    }

}

module.exports = new DownloadURLBuilder();