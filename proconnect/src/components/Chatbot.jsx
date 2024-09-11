import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Image from "next/image";
import { useRouter } from "next/router";

const Chatbot = () => {
    const API_KEY = "AIzaSyB4hZ47Jn4tV3pnkY_e7wXXE4MAH8TCXdw";
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const [userMessage, setUserMessage] = useState("");
    const chatboxRef = useRef(null);
    const [messages, setMessages] = useState([
        { content: "Hey Gitamite! How can I assist you today?", type: "incoming" }
    ]);
    const [curr, setCurr] = useState(1);

    const router = useRouter();

    const handleChat = async () => {
        const trimmedMessage = userMessage.trim();
        if (trimmedMessage === "") return;

        appendMessage({ content: trimmedMessage, type: "outgoing" });
        setUserMessage("");

        try {
            appendMessage({ content: "Typing...", type: "incoming" });
            const result = await model.generateContent(trimmedMessage);
            popMessage();
            const text = result?.response?.text();

            if (text) {
                appendMessage({ content: formatText(text), type: "incoming" });
            } else {
                throw new Error("No response from the AI model.");
            }
        } catch (error) {
            // Display error message
            appendMessage({
                content: "Oops! Something went wrong. Please try again!",
                type: "error"
            });
        }
    };

    const appendMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    const popMessage = () => {
        setMessages((prevMessages) => prevMessages.slice(0, -1));
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        if (chatboxRef.current) {
            chatboxRef.current.scrollTo({
                top: chatboxRef.current.scrollHeight,
                behavior: "smooth"
            });
        }
    };

    const formatText = (text) => {
        text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");
        text = text.replace(/\n/g, "<br>");
        return <span dangerouslySetInnerHTML={{ __html: text }} />;
    };

    return (
        <div className="fixed">
            {curr === 1 ? (
                <button
                    onClick={() => setCurr(2)}
                    style={{
                        backgroundColor: "#007bff",
                        color: "#fff",
                        padding: "10px",
                        borderRadius: "5px",
                        border: "none",
                        position: "fixed",
                            bottom: "20px",
                            right: "20px",
                            zIndex: "9999",
                        cursor: "pointer"
                    }}
                >
                    Open Chat Bot
                </button>
            ) : (
                curr === 2 && (
                    <div
                        className="chatBotContainer"
                        style={{
                            position: "fixed",
                            bottom: "20px",
                            right: "20px",
                            zIndex: "9999"
                        }}
                    >
                        <div
                            className="chatBot"
                            style={{
                                backgroundColor: "#f1f1f1",
                                width: "300px",
                                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                                borderRadius: "5px",
                                overflow: "hidden"
                            }}
                        >
                            <header
                                className="header1"
                                style={{
                                    backgroundColor: "#007bff",
                                    padding: "10px",
                                    color: "#fff"
                                }}
                            >
                                <div
                                    className="h2header"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <span id="chatbotlogo">
                                        <img
                                            src="YOUR_LOGO_URL"
                                            alt="Logo"
                                            style={{ width: "30px", height: "30px" }}
                                        />
                                    </span>
                                    <h2>G-Assist</h2>
                                    <span
                                        alt="Close"
                                        id="cross"
                                        onClick={() => setCurr(1)}
                                        style={{
                                            cursor: "pointer",
                                            fontSize: "20px",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        X
                                    </span>
                                </div>
                            </header>
                            <ul
                                className="chatbox"
                                ref={chatboxRef}
                                style={{
                                    listStyleType: "none",
                                    padding: "10px",
                                    margin: "0",
                                    maxHeight: "300px",
                                    overflowY: "auto"
                                }}
                            >
                                {messages.map((message, index) => (
                                    <li
                                        key={index}
                                        className={`chat-${message.type} chat`}
                                        style={{
                                            marginBottom: "10px",
                                            padding: "5px",
                                            borderRadius: "5px",
                                            backgroundColor:
                                                message.type === "incoming"
                                                    ? "#fff"
                                                    : "#f1f1f1"
                                        }}
                                    >
                                        <p>{message.content}</p>
                                    </li>
                                ))}
                            </ul>
                            <div
                                className="chat-input"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "10px"
                                }}
                            >
                                <textarea
                                    rows={2}
                                    placeholder="Ask Your Doubts...(GEMINI Integrated)"
                                    value={userMessage}
                                    onChange={(e) => setUserMessage(e.target.value)}
                                    style={{
                                        flex: "1",
                                        marginRight: "10px",
                                        padding: "5px",
                                        borderRadius: "5px",
                                        border: "1px solid #ccc"
                                    }}
                                />
                                <button
                                    id="sendBTN"
                                    onClick={handleChat}
                                    style={{
                                        backgroundColor: "#007bff",
                                        color: "#fff",
                                        padding: "5px 10px",
                                        borderRadius: "5px",
                                        border: "none",
                                        cursor: "pointer"
                                    }}
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default Chatbot;
