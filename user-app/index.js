//importiamo express
const express = require('express')

//utlizziamo metodo express per creare istanza di express
const app = express()

//require is Node.js global function that allows you to extract contents from module.exports object inside some file.
const path = require('path');

//utilizziamo file nella cartella public
app.use(express.static('public'))

//assegnare porta 3000 a una variabile
const PORT  = 3000

//inizializziamo richieste e risposte del server

//pagina root, sempre login
app.get('/', (req, res) => {
    res.sendFile('registration.html', {root: __dirname + "/public"})
  })
//pagina homepage
  app.get('/homepage', (req, res) => {
  res.sendFile('homepage.html', {root: __dirname + "/public"})
})
//pagina consumptions
app.get('/consumptions', (req, res) => {
    res.sendFile('consumptions.html', {root: __dirname + "/public"})
  })
//pagina billing
app.get('/billing', (req, res) => {
    res.sendFile('billing.html', {root: __dirname + "/public"})
  })

//pagina water
app.get('/water', (req, res) => {
  res.sendFile('water.html', {root: __dirname + "/public"})
})

//pagina gas
app.get('/gas', (req, res) => {
  res.sendFile('gas.html', {root: __dirname + "/public"})
})

//pagina elettricità
app.get('/elett', (req, res) => {
  res.sendFile('elett.html', {root: __dirname + "/public"})
})

//creaiamo errore per pagine che non esistono
app.all('*', (req, res) => {
    res.sendFile('error.html', {root: __dirname + "/public"})
})


//server ascolta alla porta 3000
app.listen(PORT)