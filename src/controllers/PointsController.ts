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
            image: 'https://images.unsplash.com/photo-1552825896-8059df63a1fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
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

        return response.json({ pointItems });
    }


    async show (request: Request, response: Response ){

        const { id } = request.params;

        console.log('ID: ' + id );

        const point = await knex('points').select('*').where('id', id ).first();

        console.log('ITEMS: ' + point );

        if(!point){
            return response.status(400).json({ error: 'Não foi encontrado nenhum registro'});
        }

        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_items.point_id', id)

        return response.json( { point, items });
    }

    async index (request: Request, response: Response ){

        const { city, uf, items } = request.query;

        const parserItems = String(items)
                            .split(',')
                            .map(item => Number(item.trim()));
        
        console.log(parserItems);

        const points = await knex('points')
                        .join('point_items', 'points.id', '=', 'point_items.point_id')
                        .whereIn('point_items.item_id', parserItems)
                        .where('city', String(city))
                        .where('uf', String(uf))
                        .distinct()
                        .select('points.*');


        console.log(points );


        return response.json({ points });
    }


}

export default PointsController;