#!/usr/bin/env node

/*
 * @Author: wzheng(hb_wangzheng@163.com)
 * @Github: https://github.com/wayley
 * @Company: Fih-ACKN
 * @Date: 2019-08-28 17:01:29
 * @LastEditors: wzheng(hb_wangzheng@163.com)
 * @LastEditTime: 2019-09-06 10:54:19
 * @Description:
 */
'use strict';
const program = require('commander');
const pkg = require('../package.json');


const {
  createAction,
  initAction,
  testAction
} = require('../lib/action.config')
const _ = require('../lib/utils')

program
  .version(pkg.version)
  .option('-c, --config <path>', 'set config path. defaults to ./conf.js');

program
  .command('create')
  .arguments('<app-name>')
  .description('create a new app project')
  .action((appName, options) => {
    createAction(appName).then(done => {})
  })
program
  .command('init')
  .description('initialize a new app project') //命令的描述
  .option('-a,--all', 'Whether to init all files') //命令的参数
  .action(function (options) {
    initAction().then()
  })

program
  .command('test')
  .option('-a,--all', 'whether to test all inquirer types')
  .action(options => {
    testAction(options.all).then(data => {
      console.log('TEST', data)
    })
  })
// program
//   .command('list')
//   .description('list files in current working directory')
//   .option('-a, --all', 'Whether to display hidden files')
//   .action(function (options) {
//     console.log(options['all']);
//     fs.readdir(process.cwd(), function (err, files) {
//       var list = files;
//       if (!options['all']) { //检查用户是否给了--all或者-a的参数，如果没有，则过滤掉那些以.开头的文件
//         list = files.filter(function (file) {
//           return file.indexOf('.') !== 0;
//         });
//       }
//       console.log(list.join('\n\r')); //控制台将所有文件名打印出来
//     });
//   });



program.parse(process.argv);
