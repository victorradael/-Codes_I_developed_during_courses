const express = require('express');

const server = express();

// Query params = ?name=NodeJS
// Route Params = /curso/2
// Request Body = {name: "NodeJS", type: "backend"}

const cursos = ['NodeJS', 'JavaScript', 'React Native',];


// localhost:3000/curso
server.get('/curso/:index', (req, res) => {
    const { index } = req.params;

    return res.json(cursos[index])
})

server.listen(3000);