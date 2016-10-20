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
fs.copy('node_modules/qrcode-reader/dist/browser.js', 'js/qr.js', function (err) {
  if (err) return console.error(err)
  console.log("success!")
});
fs.copy('node_modules/geopouch/dist/geopouch.js', 'js/geopouch.js', function(err) {
  if(err) return console.error(err)
  console.log("success!")
})

fs.copy('node_modules/worker-pouch/dist/pouchdb.worker-pouch.min.js',
  'js/worker-pouch.js', function(err) {
  if(err) return console.error(err)
  console.log("success!")
})
