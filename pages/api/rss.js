// GET /api/rss -> returns RSS XML generated from data/episodes.js
import EPISODES from '../../data/episodes';

export default function handler(req, res) {
  const siteUrl = process.env.SITE_URL || 'https://lemon-lime.vercel.app';
  const buildDate = new Date().toUTCString();

  const itemsXml = EPISODES.map(ep => `
    <item>
      <title><![CDATA[${ep.title}]]></title>
      <description><![CDATA[${ep.description}]]></description>
      <pubDate>${new Date(ep.date).toUTCString()}</pubDate>
      <guid>${siteUrl}/episodes/${ep.id}</guid>
      ${ep.sampleAudio ? `<enclosure url="${ep.sampleAudio}" length="0" type="audio/mpeg" />` : ''}
      <link>${siteUrl}/episodes/${ep.id}</link>
    </item>
  `).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>Lemon Lime</title>
      <link>${siteUrl}</link>
      <description>Unhinged & random conversations with Alex & McKenzie</description>
      <lastBuildDate>${buildDate}</lastBuildDate>
      <language>en-us</language>
      ${itemsXml}
    </channel>
  </rss>`;

  res.setHeader('Content-Type', 'application/rss+xml');
  res.status(200).send(rss);
}
