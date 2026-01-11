import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '@/lib/validators/contact.schema';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Server-side validation
    const data = contactSchema.parse(body);

    // Admin Email
    await resend.emails.send({
      from: 'Enterprise <no-reply@yourdomain.com>',
      to: ['admin@yourdomain.com'],
      subject: 'New Enterprise Contact Request',
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Business Type:</strong> ${data.businessType}</p>
      `,
    });

    // User Confirmation Email
    await resend.emails.send({
      from: 'Enterprise <no-reply@yourdomain.com>',
      to: ['user@example.com'], // replace once email field exists
      subject: 'We received your inquiry',
      html: `
        <p>Hi ${data.name},</p>
        <p>Thanks for reaching out! Our team will contact you shortly.</p>
        <p><strong>Business Type:</strong> ${data.businessType}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
