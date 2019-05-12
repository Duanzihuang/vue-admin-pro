const express = require('express')
const app = express()

// CORS允许跨域
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.get('/api/dashboard/chart',(req,res) => {
    res.send([10,20,30,40,50,60])
})

app.listen(3000, err => {
  if (err) {
    console.log(err)
  }

  console.log('start ok')
})