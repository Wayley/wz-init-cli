/*
 * @Author: wzheng(hb_wangzheng@163.com)
 * @Github: https://github.com/wayley
 * @Company: Fih-ACKN
 * @Date: 2019-08-28 17:01:29
 * @LastEditors: wzheng(hb_wangzheng@163.com)
 * @LastEditTime: 2019-09-03 17:43:06
 * @Description:
 */
const nameInput = {
  type: 'input',
  message: '请输入项目名称：',
  name: 'name'
};
const versionInput = {
  type: 'input',
  message: '请输入版本号：',
  name: 'version'
};
const descriptionInput = {
  type: 'input',
  message: '请输入项目描述：',
  name: 'description'
};
const languageChoice = {
  type: 'list',
  message: '请选择语言类型:',
  name: 'lanChoice',
  choices: ['JavaScript', 'TypeScript'],
  default: 0,
};
//
const htmlConfirm = {
  type: 'confirm',
  message: '是否添加index.html',
  name: 'htmlConfirm',
  default: true
};
module.exports = {
  nameInput,
  versionInput,
  descriptionInput,
  languageChoice,
  htmlConfirm
}
