import express from 'express';
import knex from 'knex';

const routes = express.Router();


routes.get('/items' , async (req, res) => {

    const items = await knex('items').select('*');

    const serializedItems = items.map( item => {
        return {
            title:  item.titulo,
            image_url: `http://localhost:3000/uploads/${item.image}`
        };
    });

    return res.json(serializedItems);
});


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