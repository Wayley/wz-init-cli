const nameInput = [{
  type: 'input',
  message: '请输入项目名称：',
  name: 'name'
}]
const htmlContain = [{
  type: 'input',
  message: '是否添加index.html (Y/n)',
  name: 'htmlContain'
}]
const gitignoreContain = [{
  type: 'input',
  message: '是否添加.gitignore (Y/n)',
  name: 'gitignoreContain'
}]
module.exports = {
  nameInput,
  htmlContain,
  gitignoreContain
}
