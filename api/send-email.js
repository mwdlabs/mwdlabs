const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { user_name, user_email, user_phone, subject, project_type, budget, timeline, message } = req.body;

  if (!user_name || !user_email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await resend.emails.send({
      from: 'MWD Labs <contact@mwdlabs.ca>',
      to: ['mwdlabs.contact@gmail.com'],
      replyTo: user_email,
      subject: `[Contact] ${subject} — ${user_name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #111; border-bottom: 2px solid #e0e0e0; padding-bottom: 12px;">Nouveau message de contact</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 140px;">Nom</td>
              <td style="padding: 8px 0; color: #111;">${user_name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Courriel</td>
              <td style="padding: 8px 0; color: #111;"><a href="mailto:${user_email}" style="color: #0070f3;">${user_email}</a></td>
            </tr>
            ${user_phone ? `<tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Téléphone</td>
              <td style="padding: 8px 0; color: #111;">${user_phone}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Sujet</td>
              <td style="padding: 8px 0; color: #111;">${subject}</td>
            </tr>
            ${project_type ? `<tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Type de projet</td>
              <td style="padding: 8px 0; color: #111;">${project_type}</td>
            </tr>` : ''}
            ${budget ? `<tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Budget</td>
              <td style="padding: 8px 0; color: #111;">${budget}</td>
            </tr>` : ''}
            ${timeline ? `<tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Délai</td>
              <td style="padding: 8px 0; color: #111;">${timeline}</td>
            </tr>` : ''}
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #fff; border-radius: 6px; border-left: 4px solid #0070f3;">
            <p style="font-weight: bold; color: #555; margin: 0 0 8px;">Message</p>
            <p style="color: #111; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
};
