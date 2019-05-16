function form(method) {
    let res = null
    switch (method) {
      case 'POST':
        res = {
            status:true,
            message:'增加成功'
        }
        break
  
      default:
        res = null
        break
    }
  
    return res
  }
  
  module.exports = form
  