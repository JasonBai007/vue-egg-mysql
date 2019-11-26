// 引入ws模块
// https://github.com/websockets/ws
const WebSocket = require("ws");
// 引用Server类:
const WebSocketServer = WebSocket.Server;
// 实例化:
const wss = new WebSocketServer({
  port: 3001
});

// 一旦建立连接，收到消息后，就启动定时器
wss.on("connection", function(ws) {
  console.log(`websocket connected`);
  ws.on("message", function(message) {
    ws.send(`from backend: 前端，您瞧好嘞！`);
    setInterval(() => {
      ws.send(`来自后端的数据块`);
    }, 1000);
  });
});
