import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Se você está vendo isso, o Node e o Navegador estão funcionando!</h1>');
});

app.listen(PORT, () => {
    console.log(`🔥 Servidor de TESTE rodando em http://localhost:${PORT}`);
});