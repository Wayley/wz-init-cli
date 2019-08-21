#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const pkg = require('../package.json')
// process.argv 第一项是node.exe的绝对路径 第二项是执行该js的绝对路径 第三项起 就是传入的各个参数
const argv = process.argv.slice(2)
argv.forEach(arg => {
  switch (arg) {
    case '-v':
      console.log(pkg.version);
      break;
    case '-h':
      console.log('HELP')
      break;
    default:
      console.log('----------')
  }
})
let result = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8')
console.log(result, result.toString())
console.log('hello-', path.resolve('./'))