//importiamo express
const express = require('express')
//utlizziamo metodo express per creare istanza di express
const app = express()
//esperimento Json con file importato. Poi bisognerà aggiungere un DB vero e proprio
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
app.get('/persone', (req, res) => {
  //esperimento mapping per mandare campi specifici di un oggetto Json. Idea Eneriko su presentazione dati consumi
    const nuovePersone = persone.map((persona)=>{
      const {nome, cognome, eta} = persona
      return {nome,cognome,eta}

    })
    res.json(nuovePersone)
})

//esperimento per richiedere campi specifici su un oggetto Json. Idea Eneriko su presentazione dati consumi
app.get('/persone/:id',(req,res)=>{
  const {id} = req.params
  const persona = persone.find((persona)=> persona.id === id)
    res.json(persona)
  })

//creaiamo errore per pagine che non esistono
app.all('*', (req, res) => {
    res.sendFile('error.html', {root: __dirname + "/public"})
})

//server ascolta alla porta 3000
app.listen(3000)