import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';


const PORT = process.env.PORT || 3000;
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:4200', // el puerto de tu cliente Angular
    methods: ['GET', 'POST']
  }
});



app.get('/', (_req, res) => {
  res.send('Servidor con TypeScript, Express y Socket.IO');
});




io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado:', socket.id);

  socket.on('mensaje', (msg) => {
    console.log(`Mensaje recibido: ${msg}`);
    io.emit('mensaje', msg);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado:', socket.id);
  });
});

server.listen(PORT, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
