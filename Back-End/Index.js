//importiamo express
const express = require('express')
//utlizziamo metodo express per creare istanza di express
const app = express()
//esperimento Json con file importato
const {persone} = require('./persone')
//utilizziamo file nella cartella public
app.use(express.static('public'))

//inizializziamo richieste e risposte del server
//homepage
app.get('/', (req, res) => {
    res.sendFile('homepage.html', {root: __dirname + "/public"})
  })
//pagine about
app.get('/about', (req, res) => {
    res.sendFile('about.html', {root: __dirname + "/public"})
  })
//pagine contatti
app.get('/contatti', (req, res) => {
    res.sendFile('contatti.html', {root: __dirname + "/public"})
  })

//esperimento con json
app.get('/nomi', (req, res) => {
    res.json(persone)
})

//creaiamo errore per pagine che non esistono
app.all('*', (req, res) => {
    res.sendFile('error.html', {root: __dirname + "/public"})
})

//server ascolta alla porta 3000
app.listen(3000)