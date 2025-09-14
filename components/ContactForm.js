import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    setStatus(data.message);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input name="name" required className="border p-3 rounded-md" placeholder="Your name" />
      <input name="email" required className="border p-3 rounded-md" placeholder="Your email or phone" />
      <textarea name="message" required className="border p-3 rounded-md" rows={4} placeholder="Message" />
      <button className="btn-primary" type="submit">Send Message</button>
      {status && <p className="text-sm mt-2">{status}</p>}
    </form>
  );
}
