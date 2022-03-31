
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const axios = require('axios')
const port = 8080
const multer = require('multer');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/login', bodyParser.json(), async (req, res) => {
  let token = req.body.token
  let result = await axios.get('https://graph.facebook.com/me',{
    params : {
      fields : 'id,name,email',
      access_token: token
    }
  })
    console.log(result.data)
    res.send({ok: success})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) 
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
  cb(null, Date.now() + ".png")
  }
})


const upload = multer({ storage: storage }) 
app.get('/test', (req, res) => {
  res.send('Hello Upload')
})
app.post('api/uploads', upload.single('file'),  (req, res) => { 
  res.send(req.file) 
})

const onClickUpload = async () => {
    const formData = new FormData() 
    formData.append('file', file) 
    const uploadImg = await axios({ 
    method: 'post',
    url: 'http://localhost:38080/api/uploads',
    data: formData
    })
}