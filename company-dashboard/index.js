//importiamo express
const express = require('express')

//utlizziamo metodo express per creare istanza di express
const app = express()

//non so a cosa serve
const path = require('path');

//utilizziamo file nella cartella public
app.use(express.static('public'))

//assegnare porta 3000 a una variabile
const PORT  = 3000
//inizializziamo richieste e risposte del server

//homepage
app.get('/', (req, res) => {
    res.sendFile('homepage.html', {root: __dirname + "/public"})
  })

//creaiamo errore per pagine che non esistono
app.all('*', (req, res) => {
    res.sendFile('error.html', {root: __dirname + "/public"})
})


//server ascolta alla porta 3000
app.listen(PORT)