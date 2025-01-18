"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter";
import { useUser } from "@clerk/nextjs";

export function TypewriterEffectSmoothDemo() {
  const { user } = useUser(); // Fetch the current user's data from Clerk

  // Safely get the user's first name or fallback if not available
  const userName = user?.firstName || "Guest";

  const words = [
    {
      text: `Hello, ${userName}!`, // Personalized greeting
      className: "text-blue-500", // Style for ChatSphere branding
    },
    {
      text: "Welcome to ChatSphere.",
      className: "text-mint-500", // Accent color from ChatSphere
    },
    {
      text: "Explore",
    },
    {
      text: "innovative",
    },
    {
      text: "communication",
    },
    {
      text: "with ChatSphere.",
      className: "text-coral-500", 
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[18rem]">
      <TypewriterEffectSmooth
      
       words={words} />
     
    </div>
  );
}
