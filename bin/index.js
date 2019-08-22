#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const pkg = require('../package.json');
// process.argv 第一项是node.exe的绝对路径 第二项是执行该js的绝对路径 第三项起 就是传入的各个参数
const argv = process.argv.slice(2);
argv.forEach(arg => {
  switch (arg) {
    case '-v':
      console.log(pkg.version, `---------- arg为 ${arg}`);
      break;
    case '-h':
      console.log('HELP', `---------- arg为 ${arg}`);
      break;
    default:
      console.log(`---------- arg为 ${arg}`);
  }
});
try {
  let result = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  // 根据输入的 替换内容
  let newResult = result.replace(/Document/, argv[0]);

  // 写入模板
  fs.writeFile('test.html', newResult, error => {
    if (error) throw error;
  });
} catch (error) {
  console.log(error);
}
