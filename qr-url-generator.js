var QRCode = require('qrcode');
var fs = require("fs-promise");
var Bitly = require("bitly");
var async = require('asyncawait/async');
var await = require('asyncawait/await');

var main = async(function asyncMain() {
  if(process.argv.length < 3) {
    console.log("Please supply the path to a json file of urls");
    process.exit();
  }

  var conf = await (
    fs.readFile("config.json", {encoding:'utf8'}).then(
      (resp) => { return JSON.parse(resp); })
  );

  var urls = await(fs.readFile(process.argv[2], {encoding: 'utf8'}).then(
    (resp) => { return JSON.parse(resp); }
  ));
  var bitly = new Bitly(conf.access_token);
  urls.forEach( (url) => {
    var resp = await (bitly.shorten(url, (response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    }))
    var short_url = resp.data.url;
    var url_parts = short_url.split("/");
    var url_tail = url_parts[url_parts.length - 1];
    QRCode.save(`data/${url_tail}.png`, short_url, {errorCorrectLevel: "medium"} , function(err, data) {
        console.log(data);
    });
  })

})

main()
