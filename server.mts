import { createServer } from "node:http";
import { Server } from "socket.io";
import next from "next";

//  http server me request honi hi chahiye jabh hi response ayega
const  dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOST_NAME || "localhost";
const port = parseInt(process.env.PORT || "3000",10);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();
app.prepare().then(() => {
    const httpserver = createServer(handle);
    // io is a hole room in which there can be multiple users
    const io = new Server(httpserver);

    io.on("connection", (socket) => {
        console.log("User connected:", socket.id);

        socket.on("join-room", ({room,username}) => {
            // socket.join(room) is a method of socket object which is used to join a room
            socket.join(room);
            console.log(`User ${username} joined room:`, room);
            socket.to(room).emit("user_joined", `${username} joined the room!`);

            
        });

        socket.on("message", ({room,message,sender}) => {
            console.log(`Message received from ${sender} in room ${room} :`, message);
            socket.to(room).emit("message",{sender, message});
        });

        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);
        })
    });
    

    httpserver.listen(port, () => {
        console.log(`> Ready on http://${hostname}:${port}`);
    });

})