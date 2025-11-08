const path  = require("path");
const index = (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, '../../private/index.html'));
}
module.exports = {
    index
}