import React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Text,
  Heading,
  Hr,
  Link,
  Preview,
} from '@react-email/components';

interface ContactConfirmationEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  portfolioName?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export const ContactConfirmationEmail = ({
  name = 'John Doe',
  email = 'john.doe@email.com',
  subject = 'Collaboration Opportunity',
  message = 'Hi! I really like your work and would love to collaborate on an upcoming project.',
  portfolioName = 'Srilu',
  linkedinUrl = 'https://www.linkedin.com/in/sri-vijaya-lakshmi-nagulapalli-15a63a288/',
  githubUrl = 'https://github.com/srilu396',
}: ContactConfirmationEmailProps) => {
  const currentYear = new Date().getFullYear();
  const previewText = `Thank you for reaching out! Your message "${subject}" has been received.`;

  return (
    <Html lang="en">
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Main Card Wrapper */}
          <Section style={card}>
            {/* Header: Developer/Code Branding & Status Pill */}
            <Section style={headerSection}>
              <Row>
                <Column align="left" style={headerLeftCol}>
                  <table border={0} cellPadding={0} cellSpacing={0}>
                    <tbody>
                      <tr>
                        <td style={codeIconBox}>
                          <span style={codeIconText}>&lt;/&gt;</span>
                        </td>
                        <td style={{ paddingLeft: '10px' }}>
                          <span style={brandTitle}>{portfolioName}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Column>
                <Column align="right" style={headerRightCol}>
                  <table border={0} cellPadding={0} cellSpacing={0}>
                    <tbody>
                      <tr>
                        <td style={pillBadge}>
                          <span style={pillDot}>•</span>
                          <span style={pillText}>Message Received</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Column>
              </Row>
            </Section>

            <Hr style={headerDivider} />

            {/* Greeting Section with Circular Purple Badge */}
            <Section style={heroSection}>
              <table border={0} cellPadding={0} cellSpacing={0} width="100%">
                <tbody>
                  <tr>
                    <td width="56" valign="top" style={{ paddingRight: '16px' }}>
                      <div style={heroIconContainer}>
                        <span style={heroIconSymbol}>↩</span>
                      </div>
                    </td>
                    <td valign="middle">
                      <Heading as="h2" style={heroHeading}>
                        Thank you for reaching out!
                      </Heading>
                      <Text style={heroSubtitle}>
                        I&apos;ve received your message and appreciate you taking the time to get in touch.
                      </Text>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Section>

            {/* Section Subtitle */}
            <Section style={sectionTitleContainer}>
              <Text style={sectionTitle}>Your Message Details</Text>
            </Section>

            {/* Message Details Card */}
            <Section style={detailsCard}>
              {/* Name Row */}
              <table border={0} cellPadding={0} cellSpacing={0} width="100%" style={tableRow}>
                <tbody>
                  <tr>
                    <td width="90" style={fieldLabelCell}>
                      <span style={fieldIcon}>👤</span>
                      <span style={fieldLabel}>Name</span>
                    </td>
                    <td style={fieldValueCell}>
                      <span style={fieldValueText}>{name}</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div style={innerDivider} />

              {/* Email Row */}
              <table border={0} cellPadding={0} cellSpacing={0} width="100%" style={tableRow}>
                <tbody>
                  <tr>
                    <td width="90" style={fieldLabelCell}>
                      <span style={fieldIcon}>✉</span>
                      <span style={fieldLabel}>Email</span>
                    </td>
                    <td style={fieldValueCell}>
                      <span style={fieldValueText}>{email}</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div style={innerDivider} />

              {/* Subject Row */}
              <table border={0} cellPadding={0} cellSpacing={0} width="100%" style={tableRow}>
                <tbody>
                  <tr>
                    <td width="90" style={fieldLabelCell}>
                      <span style={fieldIcon}>✎</span>
                      <span style={fieldLabel}>Subject</span>
                    </td>
                    <td style={fieldValueCell}>
                      <span style={fieldValueText}>{subject}</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div style={innerDivider} />

              {/* Message Row */}
              <table border={0} cellPadding={0} cellSpacing={0} width="100%" style={tableRow}>
                <tbody>
                  <tr>
                    <td width="90" valign="top" style={{ ...fieldLabelCell, paddingTop: '10px' }}>
                      <span style={fieldIcon}>💬</span>
                      <span style={fieldLabel}>Message</span>
                    </td>
                    <td style={{ ...fieldValueCell, paddingTop: '10px' }}>
                      <Text style={messageContent}>{message}</Text>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Section>

            {/* Purple Highlighted Response Card */}
            <Section style={responseCard}>
              <table border={0} cellPadding={0} cellSpacing={0} width="100%">
                <tbody>
                  <tr>
                    <td width="44" valign="top" style={{ paddingRight: '14px' }}>
                      <div style={responseIconContainer}>
                        <span style={responseIconSymbol}>✈</span>
                      </div>
                    </td>
                    <td valign="middle">
                      <Text style={responseHeading}>My Response</Text>
                      <Text style={responseText}>
                        Thank you, {name}! I&apos;ll review your message and get back to you as soon as possible.
                      </Text>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Section>

            {/* Social Links Row */}
            <Section style={socialSection}>
              <table border={0} cellPadding={0} cellSpacing={0} align="center">
                <tbody>
                  <tr>
                    {linkedinUrl && (
                      <td style={{ padding: '0 8px' }}>
                        <Link href={linkedinUrl} style={socialButton}>
                          <span style={{ marginRight: '6px', color: '#60a5fa' }}>in</span>
                          <span>LinkedIn</span>
                        </Link>
                      </td>
                    )}
                    {githubUrl && (
                      <td style={{ padding: '0 8px' }}>
                        <Link href={githubUrl} style={socialButton}>
                          <span style={{ marginRight: '6px', color: '#c084fc' }}>&lt;/&gt;</span>
                          <span>GitHub</span>
                        </Link>
                      </td>
                    )}
                  </tr>
                </tbody>
              </table>
            </Section>

            <Hr style={footerDivider} />

            {/* Footer Section */}
            <Section style={footerSection}>
              <Text style={footerNotice}>
                This is an automated confirmation of your portfolio contact request.
              </Text>
              <Text style={copyrightText}>
                © {currentYear} {portfolioName}. All rights reserved.
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactConfirmationEmail;

/* ------------------- STYLES ------------------- */

const main: React.CSSProperties = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  padding: '24px 0',
  margin: 0,
};

const container: React.CSSProperties = {
  maxWidth: '600px',
  margin: '0 auto',
};

const card: React.CSSProperties = {
  backgroundColor: '#0c0b17',
  border: '1px solid rgba(139, 92, 246, 0.3)',
  borderRadius: '20px',
  padding: '32px 28px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6), 0 0 20px rgba(139, 92, 246, 0.1)',
};

const headerSection: React.CSSProperties = {
  marginBottom: '16px',
};

const headerLeftCol: React.CSSProperties = {
  verticalAlign: 'middle',
};

const headerRightCol: React.CSSProperties = {
  verticalAlign: 'middle',
};

const codeIconBox: React.CSSProperties = {
  width: '32px',
  height: '32px',
  borderRadius: '8px',
  backgroundColor: 'rgba(124, 58, 237, 0.15)',
  border: '1px solid rgba(139, 92, 246, 0.3)',
  textAlign: 'center' as const,
  verticalAlign: 'middle',
};

const codeIconText: React.CSSProperties = {
  color: '#c084fc',
  fontWeight: 'bold',
  fontSize: '14px',
  fontFamily: 'monospace',
  lineHeight: '32px',
};

const brandTitle: React.CSSProperties = {
  color: '#ffffff',
  fontSize: '18px',
  fontWeight: '700',
  letterSpacing: '-0.3px',
};

const pillBadge: React.CSSProperties = {
  backgroundColor: 'rgba(139, 92, 246, 0.12)',
  border: '1px solid rgba(139, 92, 246, 0.3)',
  borderRadius: '16px',
  padding: '4px 12px',
  textAlign: 'center' as const,
};

const pillDot: React.CSSProperties = {
  color: '#a855f7',
  fontSize: '14px',
  marginRight: '6px',
  verticalAlign: 'middle',
};

const pillText: React.CSSProperties = {
  color: '#c084fc',
  fontSize: '12px',
  fontWeight: '600',
  letterSpacing: '0.2px',
  verticalAlign: 'middle',
};

const headerDivider: React.CSSProperties = {
  borderColor: 'rgba(139, 92, 246, 0.15)',
  margin: '16px 0 24px 0',
};

const heroSection: React.CSSProperties = {
  marginBottom: '28px',
};

const heroIconContainer: React.CSSProperties = {
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  backgroundColor: '#160e2e',
  border: '1px solid rgba(168, 85, 247, 0.4)',
  textAlign: 'center' as const,
  lineHeight: '48px',
  boxShadow: '0 0 16px rgba(139, 92, 246, 0.25)',
};

const heroIconSymbol: React.CSSProperties = {
  color: '#c084fc',
  fontSize: '22px',
  fontWeight: 'bold',
  lineHeight: '48px',
};

const heroHeading: React.CSSProperties = {
  color: '#ffffff',
  fontSize: '19px',
  fontWeight: '700',
  lineHeight: '1.3',
  margin: '0 0 6px 0',
  letterSpacing: '-0.4px',
};

const heroSubtitle: React.CSSProperties = {
  color: '#9ca3af',
  fontSize: '13px',
  lineHeight: '1.5',
  margin: 0,
};

const sectionTitleContainer: React.CSSProperties = {
  marginBottom: '10px',
};

const sectionTitle: React.CSSProperties = {
  color: '#c084fc',
  fontSize: '14px',
  fontWeight: '600',
  letterSpacing: '0.3px',
  margin: 0,
};

const detailsCard: React.CSSProperties = {
  backgroundColor: '#080711',
  border: '1px solid rgba(139, 92, 246, 0.2)',
  borderRadius: '14px',
  padding: '6px 18px',
  marginBottom: '20px',
};

const tableRow: React.CSSProperties = {
  padding: '6px 0',
};

const fieldLabelCell: React.CSSProperties = {
  padding: '10px 0',
  verticalAlign: 'top',
  whiteSpace: 'nowrap' as const,
};

const fieldIcon: React.CSSProperties = {
  color: '#a855f7',
  fontSize: '14px',
  marginRight: '8px',
  verticalAlign: 'middle',
};

const fieldLabel: React.CSSProperties = {
  color: '#9ca3af',
  fontSize: '13px',
  fontWeight: '500',
  verticalAlign: 'middle',
};

const fieldValueCell: React.CSSProperties = {
  padding: '10px 0 10px 16px',
  verticalAlign: 'middle',
};

const fieldValueText: React.CSSProperties = {
  color: '#f3f4f6',
  fontSize: '14px',
  fontWeight: '500',
};

const messageContent: React.CSSProperties = {
  color: '#e5e7eb',
  fontSize: '14px',
  lineHeight: '1.6',
  margin: 0,
  whiteSpace: 'pre-wrap' as const,
};

const innerDivider: React.CSSProperties = {
  height: '1px',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  width: '100%',
};

const responseCard: React.CSSProperties = {
  backgroundColor: 'rgba(33, 17, 61, 0.65)',
  border: '1px solid rgba(168, 85, 247, 0.35)',
  borderRadius: '14px',
  padding: '18px 20px',
  marginBottom: '24px',
  boxShadow: '0 4px 20px rgba(124, 58, 237, 0.15)',
};

const responseIconContainer: React.CSSProperties = {
  width: '36px',
  height: '36px',
  borderRadius: '10px',
  backgroundColor: 'rgba(124, 58, 237, 0.25)',
  border: '1px solid rgba(168, 85, 247, 0.4)',
  textAlign: 'center' as const,
  lineHeight: '36px',
};

const responseIconSymbol: React.CSSProperties = {
  color: '#c084fc',
  fontSize: '16px',
  lineHeight: '36px',
};

const responseHeading: React.CSSProperties = {
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '700',
  margin: '0 0 4px 0',
  letterSpacing: '-0.2px',
};

const responseText: React.CSSProperties = {
  color: '#e2e8f0',
  fontSize: '13px',
  lineHeight: '1.5',
  margin: 0,
};

const socialSection: React.CSSProperties = {
  marginBottom: '20px',
  textAlign: 'center' as const,
};

const socialButton: React.CSSProperties = {
  display: 'inline-block',
  backgroundColor: '#120e24',
  border: '1px solid rgba(139, 92, 246, 0.25)',
  borderRadius: '20px',
  padding: '6px 16px',
  color: '#d1d5db',
  fontSize: '12px',
  fontWeight: '500',
  textDecoration: 'none',
};

const footerDivider: React.CSSProperties = {
  borderColor: 'rgba(139, 92, 246, 0.15)',
  margin: '16px 0',
};

const footerSection: React.CSSProperties = {
  textAlign: 'center' as const,
};

const footerNotice: React.CSSProperties = {
  color: '#6b7280',
  fontSize: '12px',
  margin: '0 0 6px 0',
};

const copyrightText: React.CSSProperties = {
  color: '#4b5563',
  fontSize: '11px',
  margin: 0,
};
