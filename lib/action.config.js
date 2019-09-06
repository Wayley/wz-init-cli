/*
 * @Author: wzheng(hb_wangzheng@163.com)
 * @Github: https://github.com/wayley
 * @Company: Fih-ACKN
 * @Date: 2019-08-28 17:01:29
 * @LastEditors: wzheng(hb_wangzheng@163.com)
 * @LastEditTime: 2019-09-06 10:58:36
 * @Description:
 */
const _ = require('./utils')
const inquirer = require('inquirer')
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
} = require('../lib/prompt.config')

const testAction = require('../lib/action.config.test')


function createAction(appName) {
  return new Promise((resolve, reject) => {
    if (!appName) {
      reject('请输入项目名称<app-name>')
      return false
    }
    const questions = [
      versionInput,
      descriptionInput,
      languageChoice,
      keywordsInput,
      entryPointInput,
      authorInput,
      licenseInput,
    ]
    inquirer
      .prompt(questions)
      .then(answers => {
        var packageData = {
          "name": appName,
          "version": answers.version,
          "description": answers.description,
          "keywords": answers.keywords,
          "language": answers.language,
          "main": answers.entryPoint,
          "scripts": {},
          "author": answers.author,
          "license": answers.license
        }
        var pakPath = _.getClientFilePath(appName, 'package.json')
        console.log('    ');
        console.log(`About to write to ${pakPath}: `)
        console.log('    ');
        console.log(packageData)
        console.log('    ');
        console.log('    ');

        inquirer
          .prompt([okConfirm]).then(answers => {
            if (answers.okConfirm) {
              _.cteateTask(packageData).then(done => {
                if (done) console.log('DONE')
                resolve(done)
              }).catch(error => {
                throw error
              })
            } else {
              console.log('Create failed and try it again ')
            }
          })
      })
      .catch(error => {
        throw error
      })
  })
}

function initAction() {
  return new Promise((resolve, reject) => {
    const questions = [
      nameInput,
      versionInput,
      descriptionInput,
      languageChoice
    ]
    inquirer
      .prompt(questions)
      .then(answers => {
        console.log(answers)
      }).catch(error => {
        throw error
      })
  })
}
module.exports = {
  testAction,
  createAction,
  initAction,
}
