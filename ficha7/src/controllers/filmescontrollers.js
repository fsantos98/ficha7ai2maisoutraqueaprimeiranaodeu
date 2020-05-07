var sequelize = require('../models/database');
var Filmes = require('../models/filmes');
var Generos = require('../models/generos');

const controller = {};

sequelize.sync();

controller.list = async(req, res) => {
    const data = await Filmes.findAll({
        include: [Generos]
    })
    .then(function(data){
        return data;
    })
    .catch(error =>{
        return error;
    });
    res.json({sucess: true, data, data});
}

controller.list2 = async(req, res) => {
    const data = await Filmes.findAll()
    res.json(data);
}

//get - trazer o registo com base no id
controller.get = async(req,res)=> {
    const {id } = req.params;
    const data = await Filmes.findAll({
        where: {id:id},
        include: [Generos]
    })
    .then(function(data){
        return data;
    })
    .catch(err =>{
        return err;
    });
    res.json({sucess: true, data, data});
}

//create c base nos dados do body

controller.create =async(req,res)=> {
    const {titulo, descricao, genero} = req.body;
    const data = await Filmes.create({
        titulo: titulo,
        descricao: descricao,
        generoId: genero
    })
    .then(function(data){
        return data;
    })
    .catch(err =>{
        console.log('erro' + err);
        return err;
    });
    res.status(200).json({
        success : true,
        message: 'registado com sucesso',
        data: data
    });
}
//funcao para inserir registos na tabela filmes
controller.test = async(req,res)=> {
   
    const data = await Filmes.create({
        titulo: 'tit 1',
        descricao: 'tit 1',
        generoId: 2
    })
    .then(function(data){
        return data;
    })
    .catch(err => {
        console.log('erro' + err);
        return err;
    });
    res.status(200).json({
        success : true,
        message: "registado com sucesso",
        data: data
    });
}

controller.update = async(req, res) => {
    const { id } = req.params;
    const { titulo, descricao, genero} = req.body;
    const data = await Filmes.update({
        titulo: titulo,
        descricao: descricao,
        generoId: genero,
    }, { 
        where: { id: id } 
    })
    .then(data =>{
        return data;
    })
    .catch(err =>{
        console.log("Erro: " + err)
        return err;
    })

    res.status(200).json({
        sucess: true,
        message: "Registado com sucesso",
        data: data
    })
}

module.exports = controller;