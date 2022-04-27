const { parse } = require('node-html-parser');

const { user_agent } = require('../config');

function HTTPClient() {
    this.getDownloadURL = async (proxitokUrl) => {
        try {
            const headers = {
                'User-Agent': user_agent,
            };
            const response = await fetch(proxitokUrl, { headers });
            const root = parse(await response.text());
            const dropdownContent = root.querySelector('div.dropdown-content');
            const downloadElement = dropdownContent.querySelectorAll('a')[1];
            const hrefElement = downloadElement.rawAttributes.href;
            return hrefElement.replace('amp;', '');
        } catch (err) {
            console.error(err);
            return false;
        }
    }
    
}

module.exports = new HTTPClient();