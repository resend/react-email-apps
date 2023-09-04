import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next';
import is from '@sindresorhus/is';
import { v4 as uuid } from 'uuid';

const resend = new Resend(process.env.RESEND_API_KEY);
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function sendTest(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'OPTIONS') {
    return res.status(200).json({});
  }

  if (req.method === 'POST') {
    try {
      const { to, subject, html } = req.body;

      const ip = req.headers['x-vercel-forwarded-for'];
      const latitude = req.headers['x-vercel-ip-latitude'];
      const longitude = req.headers['x-vercel-ip-longitude'];
      const city = req.headers['x-vercel-ip-city'];
      const country = req.headers['x-vercel-ip-country'];
      const country_region = req.headers['x-vercel-ip-country-region'];

      const savePromise = supabase.from('react_email_test_sends').insert([
        {
          to: [to],
          subject,
          html,
          ip,
          latitude,
          longitude,
          city,
          country,
          country_region,
        },
      ]);

      const sendPromise = resend.emails.send({
        from: 'React Email <preview@react.email>',
        to: [to],
        subject,
        html,
        headers: {
          'X-Entity-Ref-ID': uuid(),
        },
      });

      await Promise.all([savePromise, sendPromise]);

      res.status(200).json({ message: 'Test email sent' });
    } catch (error) {
      if (is.error(error)) {
        return res.status(500).json({ error: error.message });
      }
    }
  }
}
