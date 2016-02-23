// through2 is a thin wrapper around node transform streams

var through = require('through2');
var gutil = require('gulp-util');
/*
var PluginError = gutil.PluginError;
*/
// Consts
const PLUGIN_NAME = 'gulp-filemapper';


// Plugin level function(dealing with files)
function map(filemap) {

  if (!filemap) {
    throw new PluginError(PLUGIN_NAME, 'Missing file map object');
  }
  
  // Creating a stream through which each file will pass
  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      // return empty file
      return cb(null, file);
    }
	var fileName = /([^\/]*)$/
	console.log("Mapping " + file.path.basename);
	console.log(file);
	if (filemap[file.basename]) {
		file.basename = filemap[file.basename];
	}

    cb(null, file);

  });

}

// Exporting the plugin main function
module.exports = map;