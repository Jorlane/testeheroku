const express = require('express')
const app = express()

const db = require('./db')

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Oi Jorlane')
})

app.listen(port, async() => {
    console.log('Iniciando o Banco de Dados. Aguarde....')
    try {
        await db.sync({force: false})
        await start.initDataBase()

        console.log(`O servidor está executando na porta ${port}...          `)
    } catch (e) {
        console.log('Erro ao tentar conectar com o banco de dados: ')
    }
})