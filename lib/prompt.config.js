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
const lanChoice = {
  type: 'list',
  message: '请选择语言类型:',
  name: 'lanChoice',
  choices: ['JavaScript', 'TypeScript'],
  default: 0, // could be the key or value
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

const checkboxList = {
  type: 'checkbox',
  message: '请选择',
  name: 'checkboxList',
  choices: ['name', 'age', 'school', 'grade'],
  default: ['school']
};
module.exports = {
  nameInput,
  versionInput,
  descriptionInput,
  lanChoice,
  fileChoices,
  htmlContain,
  checkboxList,
}
