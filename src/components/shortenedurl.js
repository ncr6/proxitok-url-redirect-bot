function ShortenedURL() {
    this.shortenedVideoRegex = /http(?:s?):\/\/vm\.?tiktok.com\/([\w]*)/g;
    this.getShortenedVideoIDs = (url) => {
        const matches = [...url.matchAll(this.shortenedVideoRegex)];
        return matches.map(match => match[1]);
    };   
}

module.exports = new ShortenedURL();