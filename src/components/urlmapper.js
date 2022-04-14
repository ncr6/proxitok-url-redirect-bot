const { instance_url } = require('../config');

function URLMapper() {
    this.buildFromShortenedIDs = (ids) => {
        return ids.map(id => `${instance_url}/@placeholder/video/${id}`);
    }
}

module.exports = new URLMapper();