import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactNotificationEmail } from '@/emails/ContactNotificationEmail';
import { ContactConfirmationEmail } from '@/emails/ContactConfirmationEmail';
import { portfolioData } from '@/data/portfolio';

// Simple HTML escape helper to prevent HTML injection
function sanitizeText(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    // 1. Parse JSON body
    const body = await request.json();
    const { name, email, subject, message } = body;

    // 2. Validate input fields
    const trimmedName = typeof name === 'string' ? name.trim() : '';
    const trimmedEmail = typeof email === 'string' ? email.trim() : '';
    const trimmedSubject = typeof subject === 'string' ? subject.trim() : '';
    const trimmedMessage = typeof message === 'string' ? message.trim() : '';

    if (!trimmedName) {
      return NextResponse.json(
        { success: false, error: 'Please enter your name.' },
        { status: 400 }
      );
    }

    if (trimmedName.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Name must be under 100 characters.' },
        { status: 400 }
      );
    }

    if (!trimmedEmail) {
      return NextResponse.json(
        { success: false, error: 'Please enter your email.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail) || trimmedEmail.length > 255) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!trimmedSubject) {
      return NextResponse.json(
        { success: false, error: 'Please enter a subject.' },
        { status: 400 }
      );
    }

    if (trimmedSubject.length > 200) {
      return NextResponse.json(
        { success: false, error: 'Subject must be under 200 characters.' },
        { status: 400 }
      );
    }

    if (!trimmedMessage) {
      return NextResponse.json(
        { success: false, error: 'Please enter your message.' },
        { status: 400 }
      );
    }

    if (trimmedMessage.length > 5000) {
      return NextResponse.json(
        { success: false, error: 'Message must be under 5000 characters.' },
        { status: 400 }
      );
    }

    // 3. Check Resend configuration
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || 'srilunagulapalli396@gmail.com';
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

    if (!resendApiKey || resendApiKey === 'your_resend_api_key') {
      console.error('[Contact API Error]: RESEND_API_KEY environment variable is not configured.');
      return NextResponse.json(
        {
          success: false,
          error:
            'The contact email service is not configured yet. Please reach out directly to srilunagulapalli396@gmail.com.',
        },
        { status: 500 }
      );
    }

    // 4. Initialize Resend
    const resend = new Resend(resendApiKey);

    const safeName = sanitizeText(trimmedName);
    const safeEmail = sanitizeText(trimmedEmail);
    const safeSubject = sanitizeText(trimmedSubject);
    const safeMessage = sanitizeText(trimmedMessage);

    const linkedinItem = portfolioData.socialLinks.find((l) => l.label.toLowerCase() === 'linkedin');
    const githubItem = portfolioData.socialLinks.find((l) => l.label.toLowerCase() === 'github');

    // Thread Subject: Keeping a unified subject line allows Gmail, Outlook & Apple Mail
    // to group the visitor's submission, confirmation, and owner's reply into ONE single thread
    const conversationSubject = `Re: ${trimmedSubject}`;

    // Plaintext fallback formatted so email clients cleanly quote the original message on reply
    const textNotification = `From: ${trimmedName} <${trimmedEmail}>\nSubject: ${trimmedSubject}\n\nMessage:\n${trimmedMessage}\n\n---\nSent via Portfolio Contact Form`;
    const textConfirmation = `Hi ${trimmedName},\n\nThank you for reaching out! I've received your message and will get back to you as soon as possible.\n\nYour Submitted Message:\nSubject: ${trimmedSubject}\n${trimmedMessage}\n\n---\n${portfolioData.name}`;

    // 5. Send Email A (Notification to Portfolio Owner)
    // replyTo is set to visitor's email address so that clicking "Reply" in Gmail/Outlook replies directly to the visitor
    const notificationResult = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: trimmedEmail,
      subject: conversationSubject,
      text: textNotification,
      react: ContactNotificationEmail({
        name: safeName,
        email: safeEmail,
        subject: safeSubject,
        message: safeMessage,
        portfolioName: portfolioData.name,
      }),
    });

    if (notificationResult.error || !notificationResult.data) {
      console.error('[Contact API Resend Notification Error]:', notificationResult.error);
      return NextResponse.json(
        {
          success: false,
          error:
            'Unable to send your message right now. Please try again later or email directly.',
        },
        { status: 500 }
      );
    }

    // Capture the Message-ID generated by Resend for conversation threading
    const notificationMessageId = notificationResult.data.id;

    // 6. Send Email B (Confirmation to Visitor)
    // Using the same conversationSubject + In-Reply-To and References headers ensures
    // that when the owner replies to the notification email, the reply is threaded together
    // with this confirmation email inside the visitor's Gmail inbox!
    try {
      await resend.emails.send({
        from: fromEmail,
        to: [trimmedEmail],
        replyTo: toEmail,
        subject: conversationSubject,
        text: textConfirmation,
        headers: notificationMessageId
          ? {
              'In-Reply-To': `<${notificationMessageId}>`,
              'References': `<${notificationMessageId}>`,
            }
          : undefined,
        react: ContactConfirmationEmail({
          name: safeName,
          email: safeEmail,
          subject: safeSubject,
          message: safeMessage,
          portfolioName: portfolioData.name,
          linkedinUrl: linkedinItem?.href,
          githubUrl: githubItem?.href,
        }),
      });
    } catch (confirmationErr) {
      // Log visitor confirmation failure without failing the primary submission
      console.error('[Contact API Resend Confirmation Warning]:', confirmationErr);
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully. I'll get back to you as soon as possible.",
    });
  } catch (err) {
    console.error('[Contact API Unexpected Error]:', err);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected server error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}
