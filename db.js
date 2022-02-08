require('dotenv').config()
const Sequelize = require('sequelize')

const DATABASE    = process.env.DATABASE
const DB_USER     = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_SERVER   = process.env.DB_SERVER
const DB_HOST     = process.env.DB_HOST

const sequelize   = new Sequelize(DATABASE, DB_USER, DB_PASSWORD, {
    dialect: DB_SERVER, 
    host: DB_HOST
})

//testando a conexão
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Banco de Dados conectado com sucesso!.');
    } catch (error) {
        console.error('Não foi possível conectar com o Banco de Dados.', error);
    }
}

testConnection()

module.exports = sequelize 