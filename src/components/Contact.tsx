import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let valid = true;

    if (!name.trim()) {
      setNameError('Name is required.');
      valid = false;
    } else {
      setNameError('');
    }

    if (!email.trim()) {
      setEmailError('Email is required.');
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email.');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!message.trim()) {
      setMessageError('Message is required.');
      valid = false;
    } else {
      setMessageError('');
    }

    if (!valid) return;

    const serviceID = 'service_c4qzvqf';     // ← Replace
    const templateID = 'template_pqnkjmo';   // ← Replace
    const userID = 'n8GRKc7Lfhmw1QSZV';       // ← Replace

    const templateParams = {
      username: name,
      from_email: email,
      to_email: 'arzouni1277@gmail.com',
      message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setName('');
        setEmail('');
        setMessage('');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2500);
      })
      .catch((error) => {
        alert('Failed to send message. Please try again later.');
        console.error(error);
      });
  };

  return (
    <section id="contact" className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-semibold text-pink-600 mb-4">Contact Us</h2>
      <p className="text-gray-600 max-w-md mx-auto mb-6">
        Have a question or want to know more? Drop us a message anytime!
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
        <div>
          <input
            type="text"
            placeholder="Name"
            className={`w-full border px-4 py-2 rounded ${nameError ? 'border-red-500' : 'border-gray-300'}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            className={`w-full border px-4 py-2 rounded ${emailError ? 'border-red-500' : 'border-gray-300'}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
        </div>

        <div>
          <textarea
            placeholder="Your message"
            rows={4}
            className={`w-full border px-4 py-2 rounded ${messageError ? 'border-red-500' : 'border-gray-300'}`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {messageError && <p className="text-red-500 text-sm mt-1">{messageError}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
        >
          Send Message
        </button>
      </form>

      {/* Toast Notification */}
      {showToast && (
        <div
          className="fixed top-16 right-2 z-50 bg-green-600 text-white px-5 py-3 rounded-md shadow-lg flex items-center space-x-2 animate-fadeInOut"
          style={{ minWidth: '100px' }}
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

      {/* Tailwind animation classes */}
      <style>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; transform: translateY(10px); }
          10%, 90% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInOut {
          animation: fadeInOut 2.5s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default Contact;
