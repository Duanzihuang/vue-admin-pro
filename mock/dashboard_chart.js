function chart(method) {
  let res = null
  switch (method) {
    case 'GET':
      res = [100, 20, 38, 50, 20, 82]
      break

    default:
      res = null
      break
  }

  return res
}

module.exports = chart
