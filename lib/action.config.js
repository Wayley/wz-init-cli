const _ = require('./utils')
const inquirer = require('inquirer')
const {
  nameInput,
  versionInput,
  descriptionInput,
  numberInput,
  passwordInput,
  fileChoices,
  lanChoice,
  htmlContain,
  checkboxList,
  fileExpand,
} = require('../lib/prompt.config')
const htmlPath_r = _.getReadFilePath(`../templates/index.html`)
const gitignorePath_r = _.getReadFilePath(`../templates/.gitignore`)

function createAction(appName) {
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

function initAction() {
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

function testAction() {
  return new Promise((resolve, reject) => {
    const questions = [nameInput, versionInput, descriptionInput, numberInput, passwordInput, lanChoice, checkboxList, fileChoices, htmlContain, fileExpand]
    const single = [passwordInput]

    inquirer
      .prompt(single)
      .then(answers => {
        resolve(answers)
      })
      .catch(error => {
        reject(error)
      })
  })
}

module.exports = {
  createAction,
  initAction,
  testAction
}
