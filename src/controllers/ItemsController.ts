import { Request, Response } from 'express';
import connectionDB from '../database/connection';

const BASE_URL_STATIC_UPLOADS = 'http://localhost:3000/uploads';

class ItemsController {

    async index (request: Request, response: Response ){
        const items = await connectionDB('items').select('*');

        const serializedItems = items.map( item => {
            return {
                title:  item.titulo,
                image_url: `${BASE_URL_STATIC_UPLOADS}/${item.image}`
            };
        });

        console.log(serializedItems);

        return response.json(serializedItems);
    }
}

export default ItemsController;