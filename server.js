// import modules

import express from 'express'
import { students } from './data/student-data.js'
import * as studentData from './data/student-data.js'

// create Express app

const app = express()

// configure the app (app.set)
app.set('view engine', 'ejs')


// mount Middleware (app.use)



// Mount routes
app.get('/', function(req, res) {
  res.redirect('/home')
})

// app.get('/home', function(req, res) {
//   res.send('<h1>Home Page</h1>')
// })

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/students', function(req, res) {
  res.render('students/index', {
    students: students
    })
  })

// app.get('/dgm', function(req, res) {
//   res.redirect(/daniel/gene/mathews/jr)
// })

// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})