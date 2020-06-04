import express from 'express';
import routes from './routes';
import path from 'path';

const app = express();

app.use(express.json());
app.use(routes);

// utilizado para rotas de arquivos static
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3000, () => {
    console.log('Aplicaçãoiniciado na porta : 3000');
});