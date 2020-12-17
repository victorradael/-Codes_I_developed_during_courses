const express = require('express');

const server = express();

server.use(express.json());

// Query params = ?name=NodeJS
// Route Params = /curso/2
// Request Body = {name: "NodeJS", type: "backend"}

const cursos = ['NodeJS', 'JavaScript', 'React Native',];


// localhost:3000/curso
//Global Middleware
server.use((req, res, next) => {
    console.log(`Rota Chamada ${req.url}`);

    return next();
});

function checkCurso(req, res, next) {
    if (!req.body.name) {
        return res.status(400).send({ error: 'Nome do curso é obrigatório' });
    }

    return next();
}

function checkIndexCurso(req, res, next) {
    const curso = cursos[req.params.index];
    if (!curso) {
        return res.status(400).send({ error: 'Esse index não existe' });
    }

    return next();
}

// All courses
server.get('/cursos', (req, res) => {

    return res.json(cursos);
});
// Only one
server.get('/cursos/:index', checkIndexCurso, (req, res) => {
    const { index } = req.params;

    return res.json(cursos[index]);
});
// add course
server.post('/cursos', checkCurso, (req, res) => {
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
});
// Att course
server.put('/cursos/:index', checkCurso, checkIndexCurso, (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
});
// Delete Course
server.delete('/cursos/:index', checkIndexCurso , (req, res) => {
    const { index } = req.params;

    cursos.splice(index, 1);

    return res.send();
});


server.listen(3000);