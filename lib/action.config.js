/*
 * @Author: wzheng(hb_wangzheng@163.com)
 * @Github: https://github.com/wayley
 * @Company: Fih-ACKN
 * @Date: 2019-08-28 17:01:29
 * @LastEditors: wzheng(hb_wangzheng@163.com)
 * @LastEditTime: 2019-09-09 14:31:37
 * @Description:
 */
const inquirer = require('inquirer');
const shell = require('shelljs');

const _ = require('./utils');

const {
  nameInput,
  versionInput,
  descriptionInput,
  languageChoice,
  htmlConfirm,
  keywordsInput,
  entryPointInput,
  authorInput,
  licenseInput,
  okConfirm,
  frameworkChoice
} = require('../lib/prompt.config');

const testAction = require('../lib/action.config.test');
if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

function initAction() {
  return new Promise((resolve, reject) => {
    const questions = [
      nameInput,
      // versionInput,
      // descriptionInput,
      frameworkChoice
    ];
    inquirer
      .prompt(questions)
      .then(answers => {
        const {
          name,
          framework
        } = answers;
        const fmk = framework.toLowerCase();
        if (fmk === 'native javascript') {
          createAction(_.removeQuote(name));
        } else if (fmk === 'vue') {
          vueAction(name);
        } else if (fmk === 'react') {
          console.log('react');
          reactAction(name)
        } else if (fmk === 'angular') {
          console.log('angular');
        } else if (fmk === 'react native') {
          console.log('react native');
        } else if (fmk === 'angularjs') {
          console.log('angularjs');
        } else {
          createAction(_.removeQuote(name));
        }
      })
      .catch(error => {
        throw error;
      });
  });
}
// 不使用框架(原生js能力)的action
function createAction(appName) {
  return new Promise((resolve, reject) => {
    if (!appName) {
      reject('请输入项目名称<app-name>');
      return false;
    }
    const questions = [
      versionInput,
      descriptionInput,
      languageChoice,
      keywordsInput,
      entryPointInput,
      authorInput,
      licenseInput
    ];
    inquirer
      .prompt(questions)
      .then(answers => {
        var packageData = {
          name: appName,
          version: answers.version,
          description: answers.description,
          keywords: answers.keywords,
          language: answers.language,
          main: answers.entryPoint,
          scripts: {},
          author: answers.author,
          license: answers.license
        };
        var pakPath = _.getClientFilePath(appName, 'package.json');
        console.log('    ');
        console.log(`About to write to ${pakPath}: `);
        console.log('    ');
        console.log(packageData);
        console.log('    ');
        console.log('    ');

        inquirer.prompt([okConfirm]).then(answers => {
          if (answers.okConfirm) {
            _.cteateTask(packageData)
              .then(done => {
                if (done) console.log('DONE');
                resolve(done);
              })
              .catch(error => {
                throw error;
              });
          } else {
            console.log('Create failed and try it again ');
          }
        });
      })
      .catch(error => {
        throw error;
      });
  });
}
// Vue Action
function vueAction(appName) {
  console.log('Preparing....');
  console.log('');
  return new Promise((resolve, reject) => {
    shell.exec(`vue create ${appName}`, (code, stdout, stderr) => {});
  });
}
// React Action
function reactAction(appName) {
  // create-react-app
  console.log('Preparing....');
  console.log('');
  return new Promise((resolve, reject) => {
    shell.exec(`npm init react-app ${appName}`, (code, stdout, stderr) => {});
  });
}
module.exports = {
  testAction,
  createAction,
  initAction
};
