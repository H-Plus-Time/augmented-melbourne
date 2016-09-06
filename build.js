// necessary for copy x-(
var fs = require('fs-extra')
fs.copy('node_modules/three/build/three.min.js', 'js/three.min.js', function (err) {
  if (err) return console.error(err)
  console.log("success!")
});

fs.copy('node_modules/jimp/browser/lib/jimp.min.js', 'js/jimp.min.js', function (err) {
  if (err) return console.error(err)
  console.log("success!")
});
