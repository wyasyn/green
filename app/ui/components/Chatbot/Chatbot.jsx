"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./bot.scss";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { TbRobot } from "react-icons/tb";
import { IoSendSharp, IoClose } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import toast from "react-hot-toast";

const Chatbot = () => {
    const [inputText, setInputText] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [initialGreetingDone, setInitialGreetingDone] = useState(false);

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const addMessage = (type, content) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { type, content, id: Date.now() },
        ]);
    };

    const handleIntroGreeting = () => {
        const greeting = "Hello! I'm Rauf. How can I assist you today?";
        addMessage("bot", greeting);
        setInitialGreetingDone(true);
    };

    useEffect(() => {
        if (!initialGreetingDone && open) {
            handleIntroGreeting();
        }
    }, [initialGreetingDone, open]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            addMessage("user", inputText);

            const response = await axios.post(
                "https://wyasyn.pythonanywhere.com/predict",
                {
                    message: inputText,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                }
            );

            addMessage("bot", response.data.answer);
            setInputText(""); // Clear the input after submitting
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bot-main flex flex-col gap-4 items-end max-w-[300px]">
            {open && (
                <div className="box shadow-md">
                    <header className=" flex items-center gap-2 recoleta p-2">
                        <div className="bot-icon text-xl">
                            {" "}
                            <TbRobot />{" "}
                        </div>
                        <p>RAUF</p>
                    </header>
                    <div className="body flex flex-col gap-5 text-sm">
                        {messages.map((message) => (
                            <div key={message.id} className="msg">
                                {message.type === "user" ? (
                                    <div className="user">
                                        {message.content}
                                    </div>
                                ) : (
                                    <div className="bot">{message.content}</div>
                                )}
                            </div>
                        ))}
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className=" flex items-center gap-1 p-1 bg-slate-950"
                    >
                        <input
                            type="text"
                            value={inputText}
                            onChange={handleInputChange}
                            placeholder="Type your message here"
                        />
                        <button type="submit" className=" p-1 ">
                            {loading ? (
                                <div className="animate-spin">
                                    <AiOutlineLoading3Quarters />
                                </div>
                            ) : (
                                <IoSendSharp />
                            )}
                        </button>
                    </form>
                </div>
            )}

            <button
                className="bot-btn text-2xl aspect-square rounded-full p-2 shadow-md"
                onClick={() => {
                    setOpen(!open);
                }}
            >
                {open ? <IoClose /> : <HiChatBubbleBottomCenter />}
            </button>
        </div>
    );
};

export default Chatbot;
