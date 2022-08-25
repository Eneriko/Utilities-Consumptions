//importiamo express
const express = require('express')

//utlizziamo metodo express per creare istanza di express
const app = express()

//importo modulo consumi
const {consumi} = require('./consumi')

//assegnare porta 3001 a una variabile
const PORT  = 3001

//homapege
app.get('/', (req,res) => {
  res.send("<h1>Homepage</h1><a href='/consumi'>Vai a consumi </a>")
})


//Pagina con informazioni ridotte sui consumi
app.get('/consumi', (req,res)=>{ 
  const consumoRidotto = consumi.map((consumo)=>{
    const {nome, consumoMensile } = consumo
    return{nome, consumoMensile}
  })
  res.json(consumoRidotto)
})

//selezionare tutti i dati di un solo consumo utilizzando route params
app.get('/consumi/:idConsumi', (req,res)=>{
  const{idConsumi} = req.params
  const consumo = consumi.find((consumo)=> consumo.id === idConsumi)
//gestione pagine non esistenti con errore 404
  if(!consumo){
    return res.status(404).send("Consumo inesistente")
  }
  res.json(consumo)
})



//server ascolta alla porta 3001
app.listen(PORT)
