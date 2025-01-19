"use client";
import React from 'react';

const ChatForm = ({
  onSendMessage
}: {
  onSendMessage: (message: string) => void;
  
}
) => {
  const [message, setMessage] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted the form...");
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <input
        type="text"
        className="flex-1 rounded-md bg-gray-100 px-4 py-2"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="
          bg-blue
          text-white
          px-4
          py-2
          rounded-md
          hover:bg-blue-600
          transition-colors
          duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default ChatForm;
