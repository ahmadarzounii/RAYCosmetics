import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const FloatingContactButton = () => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({
    x: window.innerWidth - 100,
    y: window.innerHeight - 100,
  });
  const [dragging, setDragging] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const dragStartPos = useRef<{
    mouseX: number;
    mouseY: number;
    btnX: number;
    btnY: number;
  } | null>(null);

  const popupRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(true);
    dragStartPos.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      btnX: position.x,
      btnY: position.y,
    };
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!dragging || !dragStartPos.current) return;
    const deltaX = e.clientX - dragStartPos.current.mouseX;
    const deltaY = e.clientY - dragStartPos.current.mouseY;
    setPosition({
      x: dragStartPos.current.btnX + deltaX,
      y: dragStartPos.current.btnY + deltaY,
    });
  };

  const onMouseUp = () => {
    setDragging(false);
    dragStartPos.current = null;
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    } else {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [dragging]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const sendMessage = () => {
    let valid = true;

    if (!name) {
      setNameError("Name is required.");
      valid = false;
    } else {
      setNameError("");
    }

    if (!email) {
      setEmailError("Email is required.");
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!message) {
      setMessageError("Message is required.");
      valid = false;
    } else {
      setMessageError("");
    }

    if (!valid) return;

    const serviceID = "service_c4qzvqf";
    const templateID = "template_pqnkjmo";
    const userID = "n8GRKc7Lfhmw1QSZV";

    const templateParams = {
      username: name,
      from_email: email,
      to_email: "arzouni1277@gmail.com",
      message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setOpen(false);
        setName("");
        setEmail("");
        setMessage("");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2500);
      })
      .catch((error) => {
        alert("Failed to send message. Please try again later.");
        console.error(error);
      });
  };

  return (
    <>
      <button
        ref={btnRef}
        onClick={() => setOpen(!open)}
        onMouseDown={onMouseDown}
        className={`fixed z-50 flex items-center justify-center w-14 h-14 rounded-full bg-pink-600 text-white shadow-lg cursor-pointer select-none ${
          dragging ? "opacity-70" : "opacity-100"
        } transition-opacity`}
        style={{ top: position.y, left: position.x, userSelect: "none" }}
        title="Contact Us - Drag me!"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M22 12v7a2 2 0 01-2 2H4a2 2 0 01-2-2v-7" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M22 7a2 2 0 00-2-2H4a2 2 0 00-2 2v5l10 6 10-6V7z" />
        </svg>
      </button>

      {open && (
        <div
          ref={popupRef}
          className="fixed z-50 bg-white rounded-lg shadow-lg p-4 w-72 max-w-[70vw] sm:w-80"
          style={{
            top: Math.max(position.y - 220, 10),
            left: Math.max(position.x - 320, 10),
          }}
        >
          <h3 className="text-lg font-semibold mb-2">Send us a message</h3>

          <input
            type="text"
            className={`w-full border rounded-md p-2 mb-1 focus:outline-pink-500 text-sm sm:text-base ${
              nameError ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <p className="text-red-500 text-xs mb-2">{nameError}</p>}

          <input
            type="email"
            className={`w-full border rounded-md p-2 mb-1 focus:outline-pink-500 text-sm sm:text-base ${
              emailError ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="text-red-500 text-xs mb-2">{emailError}</p>}

          <textarea
            className={`w-full border rounded-md p-2 mb-1 focus:outline-pink-500 text-sm sm:text-base ${
              messageError ? "border-red-500" : "border-gray-300"
            }`}
            rows={4}
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {messageError && <p className="text-red-500 text-xs mb-2">{messageError}</p>}

          <button
            className="bg-pink-600 hover:bg-pink-700 text-white rounded px-4 py-2 w-full sm:w-auto"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      )}

      {showToast && (
        <div
          className="fixed top-16 right-2 z-50 bg-green-600 text-white px-5 py-3 rounded-md shadow-lg flex items-center space-x-2 animate-fadeInOut"
          style={{ minWidth: "100px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span>Message sent!</span>
        </div>
      )}

      <style>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; transform: translateY(10px); }
          10%, 90% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInOut {
          animation: fadeInOut 2.5s ease forwards;
        }
      `}</style>
    </>
  );
};

export default FloatingContactButton;
