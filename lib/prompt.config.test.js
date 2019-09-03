/*
 * @Author: wzheng(hb_wangzheng@163.com)
 * @Github: https://github.com/wayley
 * @Company: Fih-ACKN
 * @Date: 2019-08-29 14:55:39
 * @LastEditors: wzheng(hb_wangzheng@163.com)
 * @LastEditTime: 2019-09-03 16:44:27
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
const numberInput = {
  type: 'input',
  message: '请输入电话号码:',
  name: 'phone',
  validate(value) {
    const reg = /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i;
    return value.match(reg) || 'Please enter a valid phone number';
  }
};
const passwordInput = {
  type: 'password',
  message: '请输入密码:',
  name: 'password',
  mask: '*',
  validate(value) {
    return (
      (/\w/.test(value) && /\d/.test(value)) ||
      'Password need to have at least a letter and a number'
    );
  }
};
const lanChoice = {
  type: 'list',
  message: '请选择语言类型:',
  name: 'lanChoice',
  choices: ['JavaScript', 'TypeScript'],
  default: 0 // could be the key or value
  // filter: function (val) {
  //   // return val.toLowerCase();
  // }
};
const fileChoices = {
  type: 'rawlist',
  message: '请选择需要添加的文件:',
  name: 'fileChoices',
  choices: ['index.html', '.gitignore', 'README.md', 'package.json'],
  default: 'package.json'
};
const htmlContain = {
  type: 'confirm',
  message: '是否添加index.html',
  name: 'htmlContain',
  default: true
};
const fileExpand = {
  type: 'expand',
  message: 'Conflict on `file.js`:',
  name: 'overwrite',
  choices: [{
      key: 'y',
      name: 'OverWrite',
      value: 'overwrite'
    },
    {
      key: 'a',
      name: 'OverWrite this one and all next',
      value: 'overwrite_all'
    },
    {
      key: 'd',
      name: 'Show Diff',
      value: 'diff'
    },
    {
      key: 'x',
      name: 'Abort',
      value: 'abort'
    }
  ]
};
const checkboxList = {
  type: 'checkbox',
  message: '请选择',
  name: 'checkboxList',
  choices: ['name', 'age', 'school', 'grade'],
  default: ['school']
};
const introduce = {
  type: 'editor',
  message: '请输入介绍(不少于10个字)',
  name: 'bio',
  validate(text) {
    if (text.length < 10) {
      return '不少于10个字';
    }
    return true;
  }
};
module.exports = {
  nameInput,
  versionInput,
  descriptionInput,
  numberInput,
  passwordInput,
  lanChoice,
  fileChoices,
  htmlContain,
  checkboxList,
  fileExpand,
  introduce
};
