// BACK END
const express = require('express');
const { createServer } = require('http');
const { join } = require('path');
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3000; // Mahdollistaa julkaisualustan tarjoaman portin käytön
const app = express();
const server = createServer(app);
const io = new Server(server);


// Tässä ei nyt käytetäkään express staticia vaan lähetetään html manuaalisesti
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'page.html'));
});

app.get('/chat.html', (req, res) => {
    res.sendFile(join(__dirname, 'chat.html'));
  });

// CSS pyynnön käsittely
app.get('/style.css', (req, res) => {
    res.sendFile(join(__dirname, 'style.css'));
  });

app.get('/page.js', (req, res) => {
    res.sendFile(join(__dirname, 'page.js'));
  });


app.get('/henkilosto.json', (req, res) => {
    res.sendFile(join(__dirname, 'henkilosto.json'));
  });

io.on('connection', (socket) => {

  // Kun palvelin vastaanottaa viestin se emitoi sen kaikille clienteille heti
socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
});
});

server.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

