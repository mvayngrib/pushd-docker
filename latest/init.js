var fs = require("fs");
var nunjucks = require('nunjucks');

var _default = "/opt/settings/default.coffee";
var custom = "/opt/settings/settings.coffee";

try {
    // Check if custom settings are provided
    stats = fs.lstatSync(custom);
    filename = custom
}
catch (e) {
    // if not use default settings
    filename = _default
}


// generate settings from env
var settings = nunjucks.render(filename, process.env);

// write settings to pushd
fs.writeFileSync('/opt/pushd/settings.coffee', settings);

console.log("Generated settings based on environment variables:\n\n", settings)