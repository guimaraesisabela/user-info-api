const express = require('express');

const app = express();

const PORT = 3000;

// criando o get
app.get('/usuarios', (req, res) => {
 // retornando o array 
  const usuarios = [
    {
      nome: 'João Silva',
      email: 'joao@email.com',
      idade: 30,
    }
  ];

  // enviando a resposta json
  res.json(usuarios);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
