/*
 * @Author: wzheng(hb_wangzheng@163.com)
 * @Github: https://github.com/wayley
 * @Company: Fih-ACKN
 * @Date: 2019-08-29 14:55:26
 * @LastEditors: wzheng(hb_wangzheng@163.com)
 * @LastEditTime: 2019-09-03 17:06:14
 * @Description:
 */
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
  introduce
} = require('./prompt.config.test');
const {
  getRandomIndexInArray
} = require('./utils')

function testAction(all) {
  return new Promise((resolve, reject) => {
    const multiple = [nameInput, versionInput, descriptionInput, numberInput, passwordInput, lanChoice, checkboxList, fileChoices, htmlContain, fileExpand, introduce];
    const questions = all ? multiple : multiple[getRandomIndexInArray(multiple.length)]
    inquirer
      .prompt(questions)
      .then(answers => {
        resolve(answers)
      })
      .catch(error => {
        reject(error)
      })
  })
}

module.exports = testAction
