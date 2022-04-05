import React, { useState, useEffect } from "react";
import { FallBackData } from "../pages/chat";
import dynamic from "next/dynamic";
import Image from "next/image";

interface ChatType {
  fallbackData: [FallBackData];
  user: any;
}

const ChatContainer: React.FC<ChatType> = ({ fallbackData, user }) => {
  const [msg, setMsg] = useState("");
  const [messageData, setMsgData] = useState(fallbackData.slice(0).reverse());
  const [open, setOpenPicker] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });
  const handleMsg = (evt: any) => {
    setMsg(evt.target.value);
  };
  const sendMessage = async (evt: any) => {
    evt.preventDefault();
    const newChat = { userId: user.id, content: msg };
    console.log(newChat);
    const res = await fetch("/api/chat", {
      body: JSON.stringify({
        newChat,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    console.log(res);
    const { error } = await res.json();
    if (error) {
      setMsg(error);
      return;
    }
    const today = new Date();
    const todayDate = today.toLocaleDateString();
    const todayTime = today.toLocaleTimeString();
    const newMessage: FallBackData = {
      id: "newCont",
      content: msg,
      date: todayDate,
      time: todayTime,
      userId: user.id,
    };

    setMsgData([...messageData, newMessage]);
    setMsg("");
  };

  const onEmojiClick = (event: any, emojiObject: any) => {
    setChosenEmoji(emojiObject);
    setMsg(`${msg + emojiObject.emoji}`);
  };

  return (
    <div className="container mx-auto min-w-full">
      <div className="w-full border rounded">
        <div className="w-full">
          <div className="w-full flex items-center p-3 border-b border-gray-300">
            {user && (
              <div className="relative mr-auto w-10 h-10">
                <Image
                  alt="User Image"
                  layout="fill"
                  src={user.image}
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            )}
            <span className="block ml-2 font-bold text-gray-600 dark:text-white">
              {(user && user.name) || "Unknown User: Please log in"}
            </span>
          </div>
          <div className="w-full p-6 overflow-y-auto h-[25em] flex flex-col-reverse">
            <ul className="space-y-2 d-flex flex-col-reverse">
              {messageData &&
                messageData.length > 0 &&
                messageData.map((item) => (
                  <li
                    key={item.id}
                    className={
                      user && user.id === item.userId
                        ? "flex justify-end"
                        : "flex justify-start"
                    }
                  >
                    <div className="px-4 py-2 text-gray-700 dark:text-white rounded shadow dark:bg-slate-500">
                      <div className="w-full">
                        <span className="block text-center text-md">
                          {item.content}
                        </span>
                        <span className="top-0 pl-5 right-0 text-xs">
                          {item.time}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          {open && (
            <div className="absolute bottom-0">
              <Picker onEmojiClick={onEmojiClick} />
            </div>
          )}
          <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
            <button onClick={() => setOpenPicker(!open)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Message"
              className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
              name="message"
              value={msg}
              onChange={handleMsg}
              disabled={!user && true}
              required
            />
            <button type="submit" onClick={sendMessage}>
              <svg
                className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
