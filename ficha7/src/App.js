
const express = require('express');
const app= express();
const filmesroute = require('./routes/filmesroute');

// configs
app.set('port', process.env.PORT|| 3000);
app.use(express.urlencoded({ extended: true }));

// middleware
app.use(express.json());

//rotas
app.get('/', (req, res) => {
    res.send("A funcionar")
})
app.use('/filmes', filmesroute);

app.listen(app.get('port'), () =>{
    console.log("Server iniciado na porta 3000");
})