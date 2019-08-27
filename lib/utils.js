const fs = require('fs')

function mkdir(path) {
  return new Promise((resolve, reject) => {
    fs.mkdir(path, {
      recursive: true
    }, err => {
      if (err) {
        reject(err)
        throw err
      }
      resolve(path)
    });
  })
}

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err)
        throw err
      }
      resolve(data)
    })
  })
}

function writeFile(file, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, 'utf8', err => {
      if (err) {
        reject(err)
        throw err
      }
      resolve(data)
    })
  })

}

function copyTask(readFilePath, writeFilePath, Reg, replaceMent) {
  return new Promise((resolve, reject) => {
    readFile(readFilePath).then(data => {
      let newData = (Reg && replaceMent) ? data.replace(Reg, replaceMent) : data;
      return writeFile(writeFilePath, newData)
    }).then(data => {
      resolve(data)
    }).catch(err => {
      reject(err)
    })
  })

}
module.exports = {
  mkdir,
  readFile,
  writeFile,
  copyTask
}
