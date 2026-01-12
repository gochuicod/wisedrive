import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '@/lib/validators/contact.schema';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Server-side validation
    const data = contactSchema.parse(body);

    console.log('Sending emails for:', data.name, data.email);
    console.log('API Key exists:', !!process.env.RESEND_API_KEY);

    // Admin Email
    const adminResponse = await resend.emails.send({
      from: 'onboarding@resend.dev', // Use Resend's default domain for testing
      to: ['darelle@infigroup.co'],
      subject: 'New Enterprise Contact Request',
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Business Type:</strong> ${data.businessType}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    });

    console.log('Admin email response:', adminResponse);

    // User Confirmation Email
    const userResponse = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['darelle@infigroup.co'], // Send to your verified email for now
      subject: 'We received your inquiry',
      html: `
        <p>Hi ${data.name},</p>
        <p>Thanks for reaching out! Our team will contact you shortly.</p>
        <p><strong>Business Type:</strong> ${data.businessType}</p>
        <p><strong>From:</strong> ${data.email}</p>
      `,
    });

    console.log('User email response:', userResponse);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send email', details: String(error) }, { status: 400 });
  }
}
