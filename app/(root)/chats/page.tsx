"use client";

import ChatForm from '@/components/forms/ChatForm';
import ChatMessage from '@/components/forms/ChatMessage';
import {socket} from '../../../lib/socketClient';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [room, setRoom] = useState<string>(''); // Initialize the room state
  const [joined, setJoined] = useState<boolean>(false); // Fixed typo in 'cosnt'
  const [userName, setUsername] = useState<string>(''); // Initialize username state
  const [messages, setMessages] = useState<{ sender: string; message: string }[]>([]); // Initialize messages state

// useEffect hook to join the room
 useEffect(() => {

    socket.on("message", (data) => {
    setMessages((prevMessages) => [...prevMessages,data ]);
    });
    socket.on("user_joined", (message) => {
    setMessages((prevMessages) => [...prevMessages, { sender: "system", message }]);
    });

    return () => {
      socket.off("user_joined");
      socket.off("message")

    }
  }, []);




  // Handle sending a message
  const handleSendMessage = (message: string) => {
    const data ={room,message,sender:userName}
    setMessages((prevMessages) => [...prevMessages, { sender: userName, message }]);
    socket.emit("message", data);
    
   
  };

  const handleJoinRoom = () => {
    if ( room && userName) {
    socket.emit("join-room", { room, username:userName });
    setJoined(true);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center">
      {
        !joined ? (
          <div>
            <h1 className="head-text">Join a Room To Start the Chat</h1>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Enter your name"
                className=" bg-gray-50
                border border-gray-300
                text-gray-900
                text-sm
                rounded-lg
                focus:ring-blue-500
                focus:border-blue-500
                block
                w-full
                p-2
                "
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter room name"
                className="
                bg-gray-50
                border border-gray-300
                text-gray-900
                text-sm
                rounded-lg
                focus:ring-blue-500
                focus:border-blue-500
                block
                w-full
                p-2
                

                "
                onChange={(e) => setRoom(e.target.value)}
              />
              <button
                className="
                bg-indigo-500
                hover:bg-indigo-600
                text-white
                py-2
                px-4
                rounded
                "
                onClick={handleJoinRoom}
              >
                Join
              </button>
            </div>
          </div>
        ):(
          <div className="w-full max-w-3xl mx-auto">
          <h1 className="head-text">{
            room}</h1>
          <div
            className="h-[500px] overflow-y-auto
            p-4 mb-4 bg-gray-300
            rounded-lg border-2"
          >
           
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                sender={message.sender}
                message={message.message}
                isMyOwnMessage={message.sender === userName}
              />
            ))}
          </div>
          {/* Chat Form */}
          <ChatForm onSendMessage={handleSendMessage} />
        </div>

        )
      }
     
    </div>
  );
};

export default Page;
