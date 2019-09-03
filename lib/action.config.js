/*
 * @Author: wzheng(hb_wangzheng@163.com)
 * @Github: https://github.com/wayley
 * @Company: Fih-ACKN
 * @Date: 2019-08-28 17:01:29
 * @LastEditors: wzheng(hb_wangzheng@163.com)
 * @LastEditTime: 2019-09-03 17:42:44
 * @Description:
 */
const _ = require('./utils')
const inquirer = require('inquirer')
const {
  nameInput,
  versionInput,
  descriptionInput,
  languageChoice,
  htmlConfirm
} = require('../lib/prompt.config')
const testAction = require('../lib/action.config.test')

const htmlPath_r = _.getReadFilePath(`../templates/index.html`)
const gitignorePath_r = _.getReadFilePath(`../templates/.gitignore`)

function createAction_(appName) {
  if (!appName) return new Promise((resolve, reject) => {
    reject('请输入名称<app-name>')
  });
  const appPath = _.getAppPath(appName)
  const htmlPath_w = _.getWriteFilePath(appName, `index.html`)
  const gitignorePath_w = _.getWriteFilePath(appName, `.gitignore`)

  const htmlTask = _.copyTask(htmlPath_r, htmlPath_w, /Document/, appName)
  const gitignoreTask = _.copyTask(gitignorePath_r, gitignorePath_w)
  return new Promise((resolve, reject) => {
    resolve()
    // _.mkdir(appPath)
    //   .then(path => {
    //     return new Promise((resolve, reject) => {
    //       Promise.all([htmlTask, gitignoreTask]).then(list => {
    //         resolve(list)
    //       }).catch(err => {
    //         reject(err)
    //       })
    //     })
    //   })
    //   .then(list => {
    //     resolve(list)
    //   })
    //   .catch(error => {
    //     reject(error)
    //     throw error
    //   })
  })
}

function createAction(appName) {
  return new Promise((resolve, reject) => {
    if (!appName) {
      reject('请输入项目名称<app-name>')
      return false
    }
    const questions = [htmlConfirm]
    inquirer
      .prompt(questions)
      .then(answers => {
        console.log(answers)
      })
      .catch(error => {
        throw error
      })
  })
}

function initAction_() {
  return new Promise((resolve, reject) => {
    let appName;
    resolve()
    // inquirer.prompt(nameInput)
    //   .then(answers => {
    //     appName = answers.name
    //     const appPath = _.getAppPath(appName)
    //     return _.mkdir(appPath)
    //   })
    //   .then(path => {
    //     return inquirer.prompt(htmlContain)
    //   })
    //   .then(answers => {
    //     const htmlPath_w = _.getWriteFilePath(appName, `index.html`)
    //     return new Promise((resolve, reject) => {
    //       if (['n', 'no'].indexOf(answers.htmlContain.toLowerCase()) == -1) {
    //         _.copyTask(htmlPath_r, htmlPath_w, /Document/, appName).then(path => {
    //           resolve(true)
    //         }).catch(error => {
    //           reject(error)
    //         })
    //       } else {
    //         resolve(true)
    //       }
    //     })

    //   })
    //   .then(success => {
    //     return inquirer.prompt(gitignoreContain)
    //   })
    //   .then(answers => {
    //     const gitignorePath_w = _.getWriteFilePath(appName, `.gitignore`)
    //     return new Promise((resolve, reject) => {
    //       if (['n', 'no'].indexOf(answers.gitignoreContain.toLowerCase()) == -1) {
    //         _.copyTask(gitignorePath_r, gitignorePath_w).then(path => {
    //           resolve(true)
    //         }).catch(error => {
    //           reject(error)
    //         })
    //       } else {
    //         resolve(true)
    //       }
    //     })
    //   })
    //   .catch(error => {
    //     throw error
    //   })
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
