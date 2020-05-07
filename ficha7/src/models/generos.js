var Sequelize = require('sequelize');
var sequelize = require('./database');

var Generos = sequelize.define('generos', {
    descricao: Sequelize.STRING
},
{
    timestamps: false,
});
module.exports = Generos