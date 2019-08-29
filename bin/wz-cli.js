#!/usr/bin/env node

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
  .option('-a,--all', 'Whether to init all files')
  .description('create a new app project')
  .action((appName, options) => {
    createAction(appName)
  })
program
  .command('init')
  // .arguments('[env]')
  .description('initialize a new app project') //命令的描述
  .option('-a,--all', 'Whether to init all files') //命令的参数
  .action(function (options) {
    initAction()
  })

program
  .command('test')
  .option('-a,--all', '......')
  .action(options => {
    testAction().then(data => {
      console.log(data)
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
