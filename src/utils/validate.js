export const CHECK_PHONE = (rule, value, cb) => {
  if (!value) {
    return cb(new Error('手机号不能为空'))
  } else {
    let reg = /^1[3456789]\d{9}$/
    if (reg.test(value)) {
      cb();
    } else {
      return cb(new Error('请输入正确的手机号'))
    }
  }
}