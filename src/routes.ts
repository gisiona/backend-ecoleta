import express from 'express';

const routes = express.Router();


routes.get('/users' , (req, res) => {

    return res.json([
        'Gisiona',
        'Andreia',
        'Alice'
    ]);
});

routes.post('/users' , (req, res) => {

    const users = {
        nome: 'Gisiona',
        email: 'gisiona@gisiona.com',
        idade: 30
    };
    
    return res.json(users);
});

export default routes;