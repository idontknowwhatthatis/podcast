// Dummy contact API — no email service
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // For now, just log to server console
    console.log('New contact request:', { name, email, message });

    // Respond with success
    return res.status(200).json({ success: true, message: 'Message received (demo only)' });
  }

  res.status(405).json({ success: false, message: 'Method not allowed' });
}
