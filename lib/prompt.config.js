/*
 * @Author: wzheng(hb_wangzheng@163.com)
 * @Github: https://github.com/wayley
 * @Company: Fih-ACKN
 * @Date: 2019-08-28 17:01:29
 * @LastEditors: wzheng(hb_wangzheng@163.com)
 * @LastEditTime: 2019-09-05 15:57:47
 * @Description:
 */
const nameInput = {
  type: 'input',
  message: 'Please enter your application name:',
  name: 'name'
};
const versionInput = {
  type: 'input',
  message: 'Please enter your application version:',
  name: 'version',
  default: '1.0.0',
};
const descriptionInput = {
  type: 'input',
  message: 'Please enter your application description:',
  name: 'description'
};
const keywordsInput = {
  type: 'input',
  message: 'Please enter your application keywords:',
  name: 'keywords'
}
const authorInput = {
  type: 'input',
  message: 'Please enter the author of your application:',
  name: 'author'
}
const languageChoice = {
  type: 'list',
  message: 'Please pick the language of your application:',
  name: 'lanChoice',
  choices: ['JavaScript', 'TypeScript'],
  default: 1,
};
const licenseInput = {
  type: 'input',
  message: 'Please enter the license of your application version:',
  name: 'license',
  default: 'MIT',
};
const entryPointInput = {
  type: 'input',
  message: 'Please enter the entry point of your application version:',
  name: 'entryPoint',
  default: 'index.js',
};
//
const htmlConfirm = {
  type: 'confirm',
  message: 'Whether to add the `index.html` file',
  name: 'htmlConfirm',
  default: true
};
module.exports = {
  nameInput,
  versionInput,
  descriptionInput,
  languageChoice,
  htmlConfirm,
  keywordsInput,
  entryPointInput,
  authorInput,
  licenseInput,
}
