// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Ativando CORS para uma origem específica
app.use(cors({
  origin: 'http://127.0.0.1:5500' // Origem do seu frontend local
}));

// Rota de teste
app.get('/api/mensagem', (req, res) => {
  res.json({ mensagem: 'Olá! CORS está funcionando com Express.' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
