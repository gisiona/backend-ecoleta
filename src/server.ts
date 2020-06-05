import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// utilizado para rotas de arquivos static
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3000, () => {
    console.log('Aplicaçãoiniciado na porta : 3000');
});