const express = require('express')
const { Client } = require("pg");

const app = express()
const port = 3001

app.use(express.json())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'password',
    port: 5432,
});

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
  })

const getPage = (pageid) => {
return new Promise(function(resolve, reject) {
    pool.query(`SELECT * FROM Page WHERE id=${pageid}`, (error, results) => {
    if (error) {
        reject(error)
    }
    resolve(results.rows);
    })
})}

const writePage = ({parentid, email, promptText, text}) => {
    return new Promise(function(resolve, reject) {
        pool.query(`INSERT INTO Page (parentID, authorEmail, promptText, text) VALUES(${parentid}, '${email}', '${promptText}', '${text}') RETURNING id`, (error, results) => {
        if (error) {
            reject(error)
        }
        resolve(results.rows);
        })
    })}

const updatePage = (pageid, optionIndex, value) => {
    return new Promise(function(resolve, reject) {
        pool.query(`UPDATE Page SET ${optionIndex} = ${value} WHERE id = ${pageid};`, (error, results) => {
        if (error) {
            reject(error)
        }
        resolve(results.rows);
        })
    })}

const getRandomIds = () => {
    return new Promise(function(resolve, reject) {
        pool.query(`SELECT id FROM Page ORDER BY id DESC LIMIT 5;`, (error, results) => {
        if (error) {
            reject(error)
        }
        resolve(results.rows);
        })
    })}

app.get('/read/:id', (req, res) => {
    getPage(req.params.id)
    .then(response => {
        res.status(200).send(response);
    })
})

app.post('/write', (req, res) => {
    var newid = -1
    writePage(req.body)
    .then(response => {
        res.status(200).send(response);
    })
})

app.get('/update/:id/:index/:value', (req, res) => {
    var index = "option3id"
    if (req.params.index == 1) {
        index = "option1id"
    }
    if (req.params.index == 2) {
        index = "option2id"
    }
    updatePage(req.params.id, index, req.params.value)
    .then(response => {
        res.status(200).send("Added!");
    })
})

app.get('/random', (req, res) => {
    getRandomIds()
    .then(response => {
        res.status(200).send(response[Math.floor(Math.random()*response.length)]);
    })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})