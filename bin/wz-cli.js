#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const program = require('commander');
const inquirer = require('inquirer')
const pkg = require('../package.json');

const {
  init
} = require('../lib/config')

function initAction() {
  inquirer.prompt(init).then(answers => {
    console.log('Init succeed ');
  })

}
program
  .version(pkg.version)
  .option('-c, --config <path>', 'set config path. defaults to ./conf.js');

program
  .command('list') //声明hi下有一个命令叫list
  .description('list files in current working directory') //给出list这个命令的描述
  .option('-a, --all', 'Whether to display hidden files') //设置list这个命令的参数
  .action(function (options) { //list命令的实现体
    //获取当前运行目录下的文件信息
    fs.readdir(process.cwd(), function (err, files) {
      var list = files;
      if (!options.all) { //检查用户是否给了--all或者-a的参数，如果没有，则过滤掉那些以.开头的文件
        list = files.filter(function (file) {
          return file.indexOf('.') !== 0;
        });
      }
      console.log(list.join('\n\r')); //控制台将所有文件名打印出来
    });
  });

program
  .command('init')
  .description('初始化')
  .action((options) => {
    console.log(options);
    initAction()
  })

program.parse(process.argv);
