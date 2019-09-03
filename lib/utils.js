/*
 * @Author: wzheng(hb_wangzheng@163.com)
 * @Github: https://github.com/wayley
 * @Company: Fih-ACKN
 * @Date: 2019-08-28 17:01:29
 * @LastEditors: wzheng(hb_wangzheng@163.com)
 * @LastEditTime: 2019-09-03 17:03:35
 * @Description:
 */
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

function getRandomIndexInArray(length) {
  return parseInt(Math.random() * length, 10)
}
module.exports = {
  mkdir,
  readFile,
  writeFile,
  copyTask,
  getAppPath,
  getReadFilePath,
  getWriteFilePath,
  getRandomIndexInArray
}
