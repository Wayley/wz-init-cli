#!/usr/bin/env node

const fs = require('fs');
const PATH = require('path');
const program = require('commander');
const inquirer = require('inquirer')
const pkg = require('../package.json');

const {
  nameInput,
  htmlContain
} = require('../lib/prompt.config')

const _ = require('../lib/utils')

program
  .version(pkg.version)
  .option('-c, --config <path>', 'set config path. defaults to ./conf.js');

program
  .command('create')
  .option('-a,--all')
  .arguments('<app-name>')
  .description('create a new project')
  .action((appName, options) => {

    const appPath = PATH.join(process.cwd(), `/${appName}`)

    const htmlPath_r = PATH.join(__dirname, '../templates/index.html')
    const htmlPath_w = PATH.join(appPath, `index.html`)

    const gitignorePath_r = PATH.join(__dirname, '../templates/.gitignore')
    const gitignorePath_w = PATH.join(appPath, `.gitignore`)

    _.mkdir(appPath)
      .then(path => {
        const htmlTask = _.copyTask(htmlPath_r, htmlPath_w, /Document/, appName)
        const gitignoreTask = _.copyTask(gitignorePath_r, gitignorePath_w)

        return new Promise((resolve, reject) => {
          Promise.all([htmlTask, gitignoreTask]).then(list => {
            resolve(list)
          }).catch(err => {
            reject(err)
          })
        })

      })
      .catch(error => {})
  })

// program
//   .command('init')
//   .arguments('<cmd> [env]')
//   .description('初始化') //命令的描述
//   .option('-a,--allww', 'Whether to show all options') //命令的参数
//   .action(function (cmd, env) {
//     console.log(cmd, env);
//     return
//     // inquirer.prompt(nameInput).then(answers => {
//     //   console.log(options, 'Init succeed ', answers);
//     //   inquirer.prompt(htmlContain).then(answers => {
//     //     console.log('htmlContain succeed ', answers);
//     //   })
//     // })
//   })
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
