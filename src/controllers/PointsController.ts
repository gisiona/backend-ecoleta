import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {
    async create (request: Request, response: Response ){
        const { image,
            nome,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items } = request.body;

        console.log(items);

        // cria uma transaçao para controlar as modificações no banco de dados
        // const trx = knex.transaction();


        const itemsIds = await knex('points').insert({
            image: 'image-fake.png',
            nome,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        });

        console.log(itemsIds);

        // cria o relacionamento entre iems e points
        const pointItems = items.map(( item_id: number) => {
            return {
                item_id,
                point_id: itemsIds[0],
            }
        });

        await knex('point_items').insert(pointItems);

        // await (await trx).commit();

        return response.json({ sucess: true });
    }


    async show (request: Request, response: Response ){

        const { id } = request.params;

        console.log('ID: ' + id );

        const point = await knex('points').select('*').where('id', id ).first();

        console.log('ITEMS: ' + point );

        if(!point){
            return response.status(400).json({ error: 'Não foi encontrado nenhum registro'});
        }

        return response.json(point);
    }



}

export default PointsController;