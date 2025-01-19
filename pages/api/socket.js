// pages/api/socket.js
import { Server } from "socket.io";

export default function handler(req, res) {
  if (req.method === "GET") {
    const io = new Server(res.socket.server);
    io.on("connection", (socket) => {
      console.log("A user connected");

      // Handle custom events, e.g. chatMessage
      socket.on("chatMessage", (msg) => {
        io.emit("chatMessage", msg);  // Broadcast to all clients
      });

      socket.on("disconnect", () => {
        console.log("A user disconnected");
      });
    });

    res.socket.server.io = io;
    res.end();
  }
}
