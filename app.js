const express = require('express');
const app = express();
const faltasRoute = require('./routes/faltasRoute');
const ideiaRoute = require('./routes/ideiaRoute');
const feriasRoute = require('./routes/feriasRoute');
const userRoute = require('./routes/userRoute')
const calendarioRoute = require('./routes/calendarioRoute');
const despesasRoute = require('./routes/despesasRoute');
const blogRoute = require('./routes/blogRoute');
const noticiaRoute = require('./routes/noticiaRoute');
const visitaRoute = require('./routes/visitaRoute');
const candidaturasRoute = require('./routes/candidaturasRoute');
const departamentoRoute = require('./routes/departamentoRoute');
const empresaRoute = require('./routes/empresaRoute');
const notificacoesRoute = require('./routes/notificacoesRoute');
const projetosRoute = require('./routes/projetosRoute');
const reembolsosRoute = require('./routes/reembolsosRoute');
const vagaRoute = require('./routes/vagaRoute');
const userVisitanteRoute = require('./routes/userVisitanteRoute');
const cors = require('cors');
const sequelize = require('./models/database');
const middleware = require('./middleware');
const bodyParser = require('body-parser');

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};

app.use(cors(corsOptions));

app.set('port', process.env.PORT || 10000);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type,Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get('/check', (req, res) => {
  res.status(200).send({ message: "Wecolme to MHRS API" });
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.json());


app.use('/faltas', faltasRoute);
app.use('/ideias', ideiaRoute);
app.use('/ferias', feriasRoute);
app.use('/user', userRoute);
app.use('/calendario', calendarioRoute);
app.use('/despesas', despesasRoute);
app.use('/blog', blogRoute);
app.use('/noticia', noticiaRoute);
app.use('/visita', visitaRoute);
app.use('/candidaturas', candidaturasRoute);
app.use('/departamento', departamentoRoute);
app.use('/empresa', empresaRoute);
app.use('/notificacoes', notificacoesRoute);
app.use('/projeto', projetosRoute);
app.use('/reembolsos', reembolsosRoute);
app.use('/vaga', vagaRoute);
app.use('/userVisitante', userVisitanteRoute);

sequelize.sync()
  .then(() => {
    console.log('Modelos sincronizados com o banco de dados.');
  })
  .catch(err => {
    console.error('Erro ao sincronizar modelos com o banco de dados:', err);
  });
  

app.listen(app.get('port'), () => {
    console.log("Start server on port " + app.get('port'));
})