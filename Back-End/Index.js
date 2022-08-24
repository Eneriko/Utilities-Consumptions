//importiamo express
const express = require('express')
//utlizziamo metodo express per creare istanza di express
const app = express()

//utilizziamo file nella cartella public
app.use(express.static('public'))

//inizializziamo richieste e risposte del server
//homepage
app.get('/', (req, res) => {
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
app.get('/consumptions/water', (req, res) => {
  res.sendFile('water.html', {root: __dirname + "/public"})
})

//pagina gas
app.get('/consumptions/gas', (req, res) => {
  res.sendFile('gas.html', {root: __dirname + "/public"})
})

//pagina elettricità
app.get('/consumptions/elett', (req, res) => {
  res.sendFile('elett.html', {root: __dirname + "/public"})
})

//creaiamo errore per pagine che non esistono
app.all('*', (req, res) => {
    res.sendFile('error.html', {root: __dirname + "/public"})
})

//server ascolta alla porta 3000
app.listen(3000)