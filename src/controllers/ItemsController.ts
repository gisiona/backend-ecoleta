import { Request, Response } from 'express';
import connectionDB from '../database/connection';

const BASE_URL_STATIC_UPLOADS = 'http://192.168.0.210:3000/uploads';

class ItemsController {

    async index (request: Request, response: Response ){
        const items = await connectionDB('items').select('*');

        const serializedItems = items.map( item => {
            return {
                id: item.id,
                title:  item.titulo,
                image_url: `${BASE_URL_STATIC_UPLOADS}/${item.image}`
            };
        });

        console.log(serializedItems);

        return response.json(serializedItems);
    }
}

export default ItemsController;