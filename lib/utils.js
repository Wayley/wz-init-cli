/*
 * @Author: wzheng(hb_wangzheng@163.com)
 * @Github: https://github.com/wayley
 * @Company: Fih-ACKN
 * @Date: 2019-08-28 17:01:29
 * @LastEditors: wzheng(hb_wangzheng@163.com)
 * @LastEditTime: 2019-09-06 10:48:09
 * @Description:
 */
const fs = require('fs')
const PATH = require('path');


/* ---------------------fsFns-------------------- */

function mkdir(path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject('请先添加目录名称。。')
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
/* ----------------------pathFns------------------- */

function getClientFolderPath(folderName) {
  return !!folderName ? PATH.join(process.cwd(), `/${folderName}`) : ''
}

function getClientFilePath(folderName, fileName) {
  return (!!folderName && !!fileName) ? PATH.join(getClientFolderPath(folderName), `${fileName}`) : ''
}

function getCliFolderPath(folderName) {
  return !!folderName ? PATH.join(__dirname, `${folderName}`) : ''
}

function getCliFilePath(folderName, fileName) {
  return (!!folderName && !!fileName) ? PATH.join(getCliFolderPath(folderName), `${fileName}`) : ''
}

/* ------------------------taskFns----------------- */

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

function cteateTask(pkg) {
  return new Promise((resolve, reject) => {
    if (pkg) {
      // 创建文件夹
      const appPath = getClientFolderPath(pkg.name)

      const templatePath = '../templates'

      mkdir(appPath)
        // 写入package.json
        .then(() => {
          return writeFile(`${appPath}/package.json`, JSON.stringify(pkg, null, '\t'))
        })
        // 读取.gitignore
        .then(() => {
          return readFile(getCliFilePath(templatePath, '.gitignore'))
        })
        // 写入.gitignore
        .then(data => {
          return writeFile(`${appPath}/.gitignore`, data)
        })
        // 读取index.html
        .then(() => {
          return readFile(getCliFilePath(templatePath, 'index.html'))
        })
        // 写入index.html
        .then(data => {
          // 替换index.html中的title
          const newData = data.replace(/Document/, pkg.name)
          return writeFile(`${appPath}/index.html`, newData)
        })
      resolve(true)
    } else {
      reject('缺少写入package.json的数据')
    }
  })
}
/* ------------------------utils----------------- */
function getRandom(n, m) {
  if (n > m) {
    var tem = n
    n = m
    m = tem
  }
  return n + Math.floor(Math.random() * (m - n + 1))
}
const fsFns = {
  mkdir,
  readFile,
  writeFile,
}
const pathFns = {
  getClientFolderPath,
  getClientFilePath,
  getCliFolderPath,
  getCliFilePath,
}
const taskFns = {
  cteateTask,
  copyTask,
}
module.exports = {
  ...fsFns,
  ...pathFns,
  ...taskFns,
  getRandom,
}
