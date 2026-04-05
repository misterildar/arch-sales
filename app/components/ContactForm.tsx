'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, phone, message }),
    });

    if (res.ok) {
      setStatus('Message sent successfully!');
      setName('');
      setPhone('');
      setMessage('');
    } else {
      setStatus('Failed to send message.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-full max-w-lg space-y-6'>
      <h2 className='text-3xl font-bold text-center text-white'>
        Свяжитесь с нами
      </h2>
      <div className='flex flex-col space-y-4'>
        <input
          type='text'
          placeholder='Имя'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className='bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00A3FF]'
        />

        <input
          type='tel'
          placeholder='Телефон'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className='bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00A3FF]'
        />
        <textarea
          placeholder='Сообщение'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          className='bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00A3FF]'
        />
      </div>
      <button
        type='submit'
        className='w-full min-h-[50px] items-center justify-center rounded-xl bg-[#00A3FF] px-12 text-[17px] font-bold text-black shadow-[0_0_36px_rgba(0,163,255,0.6),0_0_90px_rgba(0,163,255,0.18)] transition hover:bg-[#33b4ff]'
      >
        Отправить
      </button>
      {status && <p className='text-center text-white mt-4'>{status}</p>}
    </form>
  );
}
