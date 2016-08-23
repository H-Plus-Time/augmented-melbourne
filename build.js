// necessary for copy x-(
var fs = require('fs-extra')
fs.copy('node_modules/three/build/three.min.js', 'js/three.min.js', function (err) {
  if (err) return console.error(err)
  console.log("success!")
});
