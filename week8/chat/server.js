
const WebSocket = require('ws');
const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const connections = new Map();
app.use(express.static(path.join(__dirname, 'public')));

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const data = JSON.parse(message);

    if (data.type === 'new-user') {

      connections.set(data.username, ws);
      console.log(`new-user`);

      
    } else {

      if (connections.has(data.receiver)) {
        const receiverSocket = connections.get(data.receiver);
        receiverSocket.send(JSON.stringify({
          type: 'message',
          sender: data.username,
          content: data.content,
        }));
        console.log(`${data.username} gửi tin nhắn đến ${data.receiver}: ${data.content}`);
      }
    }
  });

  ws.on('close', () => {

    connections.forEach((value, key) => {
      if (value === ws) {
        connections.delete(key);
      }
    });
  });
});


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

