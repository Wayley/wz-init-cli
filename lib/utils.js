const fs = require('fs')
const PATH = require('path');

function mkdir(path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject('请先添加文件名称。。')
      return
    }
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
    if (!path) {
      reject('请先传入文件路径。。')
      return
    }
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

function getAppPath(appName) {
  return !!appName ? PATH.join(process.cwd(), `/${appName}`) : ''
}

function getReadFilePath(path) {
  return !!path ? PATH.join(__dirname, `${path}`) : ''
}

function getWriteFilePath(appName, name) {
  return (!!appName && !!name) ? PATH.join(getAppPath(appName), `${name}`) : ''
}
module.exports = {
  mkdir,
  readFile,
  writeFile,
  copyTask,
  getAppPath,
  getReadFilePath,
  getWriteFilePath,
}
