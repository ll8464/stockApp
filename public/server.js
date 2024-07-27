var http = require("http");
var url = require("url");
var fs = require("fs");

http
  .createServer(function (req, res) {
    var filename = "public/index.html";
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, {
          "Content-Type": "text/html",
        });
        res.write("Oops, ");
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
    if (req.url == "style.css") {
      res.setHeader("Content-type", "text/css");
      res.write(fs.readFileSync("style.css"));
      res.end();
    }
  })
  .listen(8080);
