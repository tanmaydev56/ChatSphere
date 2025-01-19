import React from 'react';

interface ChatProps {
  sender: string;
  isMyOwnMessage: boolean;
  message: string;
}

const ChatMessage = ({ sender, message, isMyOwnMessage }: ChatProps) => {
  const isSystemMessage = sender === 'system';

  return (
    <div
      className={`flex ${
        isSystemMessage
          ? 'justify-center'
          : isMyOwnMessage
          ? 'justify-end'
          : 'justify-start'
      } mb-3`}
    >
      <div
        className={`max-w-xs rounded-lg px-4 py-2 ${
          isSystemMessage
            ? 'bg-gray-100 text-center text-gray-500'
            : isMyOwnMessage
            ? 'bg-[#4A90E2] text-[#F5F7FA]'
            : 'bg-[#D9E4F2] text-dark-1'
        }`}
      >
        {/* Display the sender's name for non-system messages */}
        {!isSystemMessage && (
          <p className="text-sm font-bold mb-1">{sender}</p>
        )}
        {/* Display the message content */}
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
