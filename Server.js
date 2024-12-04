
import express from 'express';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();


app.use(cors());
app.use(bodyParser.json());

// Configuração do banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sua ssenha',
  database: 'nome da database'
});

// Conectando ao MySQL
db.connect((err) => {
  if (err) {
    console.error('Erro de conexão com o banco de dados: ' + err.stack);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Rota para salvar os dados do formulário
app.post('/salvar-contato', (req, res) => {
  const { nome, email, telefone, cartItems, totalPrice } = req.body;

  // SQL para inserir os dados
  const query = `INSERT INTO contatos (nome, email, telefone, cart_items, total_price) VALUES (?, ?, ?, ?, ?)`;

  // Inserir os dados no banco de dados
  db.query(query, [nome, email, telefone, JSON.stringify(cartItems), totalPrice], (err, result) => {
    if (err) {
      console.error('Erro ao salvar no banco de dados: ', err);
      return res.status(500).send('Erro ao salvar os dados');
    }
    res.status(200).send('Dados salvos com sucesso');
  });
});

// Iniciar o servidor
const port = 5000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
