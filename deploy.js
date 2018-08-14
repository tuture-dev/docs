#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const OSS = require('ali-oss');

const ossConfig = JSON.parse(fs.readFileSync('deploy-conf.json'));
const client = new OSS(ossConfig);
const buildDir = path.join('.vuepress', 'dist');

function walk(dirName, callback) {
  fs.readdir(dirName, (err, files) => {
    if (err) {
      callback(err, null);
    }

    files.forEach(file => {
      const fullPath = path.join(dirName, file);
      fs.stat(fullPath, (err, file) => {
        if (err) {
          callback(err, null);
        }
        if (file.isDirectory()) {
          walk(fullPath, callback);
        } else {
          callback(null, fullPath);
        }
      });
    });
  });
}

walk(buildDir, (err, filePath) => {
  if (err) throw err;
  client
    .put(filePath.substr(buildDir.length + 1), filePath)
    .then(() => console.log(`${filePath} uploaded!`))
    .catch(err => console.log(err));
});
