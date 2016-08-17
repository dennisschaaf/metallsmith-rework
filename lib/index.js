
var minimatch = require('minimatch');
var rework = require('rework')

function plugin (options) {
  var options = options || {};
  options.configure = options.configure || (a) => { return a };
  options.pattern = options.pattern || "*.css";
  options.minimatch = options.minimatch || { matchBase: true };

  return function (files, metalsmith, done) {
    var styles = Object.keys(files).filter(minimatch.filter(options.pattern, options.minimatch));
    setImmediate(done);

    styles.forEach(function (file, index, arr) {
    	const content = files[file].contents.toString();
    	const reworkInstance = options.configure(rework(content), file);
      	const newContent = reworkInstance.toString(options.options);
      	files[file].contents = Buffer.from(newContent);
    });
  }
}

module.exports = plugin;
