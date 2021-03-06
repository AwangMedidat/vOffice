if(process.env.NODE_ENV !== 'development'){
  require('dotenv').config()
}

const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.port || 3001
const router = require('./routes/index')
const errHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(router)
app.use(errHandler)

app.listen(port, () => {
  console.log(`app running on port: ${port}`);
})
