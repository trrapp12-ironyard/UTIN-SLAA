const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
// tells the server to use the default port, and if it's not availale to make 8080 the defualt port.
const app = express();
const DIST_DIR = path.resolve(__dirname, "dist");

app.use(express.static(DIST_DIR));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(DIST_DIR, 'index.html'))
});
// res.sendFile is a way node.js uses to deliver an html file.  It takes a path for the filename as an argument.  path.resolve turns the file path into an absolute file path.  path.resolve() returns the path as if you navigated to the directories in sequence (and resolving the actual location of the file/directory).

app.listen(port);
console.log('Server started');
