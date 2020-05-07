var Sequelize = require('sequelize');
var sequelize = require('./database');

// importa o modelo – chave forasteira roleID
var Generos = require('./generos');

var Filmes = sequelize.define('filmes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    descricao: Sequelize.STRING,
    titulo: Sequelize.STRING,
    foto: Sequelize.STRING,
    generoId: {
            type: Sequelize.INTEGER,
            // referência a outro modelo
            references: {
                model: Generos,
                key: 'id'
        }
    }
},
{
    timestamps: false,
});

Filmes.belongsTo(Generos);

module.exports = Filmes;