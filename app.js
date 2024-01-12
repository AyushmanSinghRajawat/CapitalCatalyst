const express = require('express')
const app = express()
const port = 3000

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs')

// Routing 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/companydetails',(req,res)=>{
  res.render('companyDetails')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})